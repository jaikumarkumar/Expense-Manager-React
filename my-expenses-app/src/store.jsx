// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootReducer";


import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

// 1. create persistconfig and include our local storage
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
  }

// 2. add our reducer function to 
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
