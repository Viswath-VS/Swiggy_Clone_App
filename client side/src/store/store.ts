import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './models/userinfo';
import vaccineReducer from './models/vaccinecenter';

export const store = configureStore({
    reducer: combineReducers({ user: userReducer, vaccine: vaccineReducer }),
    middleware: getDefaultMiddleware({
        serializableCheck: false, // try to avoid using non-serialized value in store (only use if it is really needed)
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
