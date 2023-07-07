import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { api } from "@/services";
import authReducer from "./slice/authSlice";
import { nextReduxCookieMiddleware, wrapMakeStore } from "next-redux-cookie-wrapper";

const combinedReducer = combineReducers({
  auth: authReducer,
  [api.reducerPath]: api.reducer,
});

export const makeStore = wrapMakeStore(() =>
  configureStore({
    reducer: combinedReducer,
    middleware: (gDM) =>
      gDM()
        .concat(api.middleware)
        .prepend(
          nextReduxCookieMiddleware({
            subtrees: [{ subtree: "auth" }],
          })
        ),
  })
);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
