import { RootState } from "@/store";
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";
import { setCredentials } from "@/store/slice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:3000/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    token && headers.set("authorization", `Bearer ${token}`);
    //  headers.set("Content-Type", "application/json");
    headers.set("Accept", "application/json");
    return headers;
  },
});

const baseQueryWithInterceptor: BaseQueryFn<FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const authState: any = api.getState();

  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    api.dispatch(setCredentials({ token: null, user: null }));
  }

  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    // omitted
  }),
});
