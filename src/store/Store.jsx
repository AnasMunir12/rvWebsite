import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import rvConsignmentslice from "./slices/RvConsignment";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rvConsignmentslice);

const store = configureStore({
  reducer: {
    rvConsignment: persistedReducer,
  },
});

export const persister = persistStore(store);
export default store;
