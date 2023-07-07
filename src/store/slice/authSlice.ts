import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "@/store";
import { User } from "@/types/authModel";

export type AuthState = {
  user: User | null;
  token: string | null;
};

const slice = createSlice({
  name: "auth",
  initialState: { token: null, user: null } as AuthState,
  reducers: {
    setCredentials: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => ({
      ...state,
      // @ts-ignore
      ...action.payload.auth,
    }));
  },
});

export const { setCredentials } = slice.actions;
export default slice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
