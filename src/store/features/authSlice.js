import { createSlice } from '@reduxjs/toolkit';
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
    token: null,
    name: "",
    id: "",
    avatarURL: "",
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getUser(state, action) {
            state.token = action.payload.token;
            state.name = action.payload.user.name;
            state.id = action.payload.user.id;
            state.avatarURL = action.payload.user.avatarURL;
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

export const { getUser, clearToken } = authSlice.actions

export const selectToken = (state) => state.auth.token;
export const selectName = (state) => state.auth.name;
export const selectId = (state) => state.auth.id;
export const selectAvatarURL = (state) => state.auth.avatarURL;