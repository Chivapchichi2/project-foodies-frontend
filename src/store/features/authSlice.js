import { createSlice } from '@reduxjs/toolkit';
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getToken(state, action) {
            state.token = action.payload;
        },
        clearToken(state) {
            state.token = null;
        },
    },
});

export const persistedAuthReducer = persistReducer(
    {
        key:"token",
        storage
    },
    authSlice.reducer
    );

export const { getToken, clearToken } = authSlice.actions

export const selectToken = (state) => state.auth.token;