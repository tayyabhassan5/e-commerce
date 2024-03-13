import {configureStore} from "@reduxjs/toolkit";
import cartReducer from './count'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
  }

const persistedReducer = persistReducer(persistConfig, cartReducer)


export const store= configureStore({
    reducer:{
        cart:persistedReducer,
    }

});
export const persistor = persistStore(store)
