import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSliceReducer from "@/store/slices/userSlice.js";

import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({ user: UserSliceReducer });

const persistConfig = {
    key: 'root',
    storage,
    version: 1,

}
const persistedReducers = persistReducer(persistConfig, rootReducer);
const appStore = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(appStore);

export default appStore;