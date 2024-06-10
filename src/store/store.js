import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import { testimonialApi } from "./services/testimonialService.js";
import { authApi } from "./services/authService.js";
import { persistedAuthReducer } from "./features/authSlice.js";
import { recipeApi } from "./services/recipeService.js";

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    [testimonialApi.reducerPath]: testimonialApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [recipeApi.reducerPath]: recipeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(testimonialApi.middleware)
      .concat(authApi.middleware)
      .concat(recipeApi.middleware),
});

export const persistor = persistStore(store);
