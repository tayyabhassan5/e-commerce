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

// import { configureStore } from "@reduxjs/toolkit";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // or another storage provider

// import cartReducer from "./count";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, {
//   cart: cartReducer,
// });

// const store = configureStore({
//   reducer: persistedReducer,
// });

// const persistor = persistStore(store);

// export { store, persistor };


