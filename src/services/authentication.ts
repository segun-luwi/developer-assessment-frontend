import { LoginRequestModel, LoginResponseModel } from "@/types/authModel";
import { api } from "./index";

export const authEndpoint = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<any, LoginRequestModel>({
      query: ({ ...values }) => {
        console.log('here', {...values});
        return {
          url: `auth/login`,
          method: "POST",
          body: { ...values }
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useLoginMutation } = authEndpoint;
