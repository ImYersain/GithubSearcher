import { githubReducer } from './github/github.slice';
import { configureStore, getDefaultMiddleware, MiddlewareArray } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { githubApi } from "./github/github.api";

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        github: githubReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)
})


setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;