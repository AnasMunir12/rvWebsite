import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import rvConsignmentReducer from "./slices/RvConsignment";
import authReducer from "./slices/AuthSlice";

// 🔹 Combine all reducers
const rootReducer = combineReducers({
  rvConsignment: rvConsignmentReducer,
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persister = persistStore(store);
export default store;
