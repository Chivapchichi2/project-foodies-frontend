import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import { testimonialApi } from "./services/testimonialService.js";
import { authApi } from "./services/authService.js";
import { profileApi } from "./services/profileService.js";
import profileReducer from "./features/profileSlice.js";
import { persistedAuthReducer } from "./features/authSlice.js";
import favoriteRecipesReducer from "./features/favoriteRecipesSlice.js";
import { recipeApi } from "./services/recipeService.js";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    auth: persistedAuthReducer,
    [testimonialApi.reducerPath]: testimonialApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
    [recipeApi.reducerPath]: recipeApi.reducer,
    favoriteRecipes: favoriteRecipesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(testimonialApi.middleware)
      .concat(authApi.middleware)
      .concat(profileApi.middleware)
      .concat(recipeApi.middleware),
});

export const persistor = persistStore(store);
