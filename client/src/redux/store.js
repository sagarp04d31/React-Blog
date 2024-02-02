import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import userReducer from './user/userSlice.js';
import storage from 'redux-persist/lib/storage';

const combinedReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: 'user',
  storage,
  version: 1
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({ serializableCheck: false, })
});

export const persistor = persistStore(store);

