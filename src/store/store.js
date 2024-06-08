import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import { persistedLoginReducer } from "./login/loginSlice";

import {testimonialApi} from "./services/testimonialService.js";
import {authApi} from "./services/authService.js";

export const store = configureStore({
  reducer: {
    login: persistedLoginReducer,
      [testimonialApi.reducerPath ]: testimonialApi.reducer,
      [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
        .concat(testimonialApi.middleware)
        .concat(authApi.middleware)
    ,
});

export const persistor = persistStore(store);
