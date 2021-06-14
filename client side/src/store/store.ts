import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from "store/models/userinfo";

export const store = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware({
        serializableCheck: false, // try to avoid using non-serialized value in store (only use if it is really needed)
    }),
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;