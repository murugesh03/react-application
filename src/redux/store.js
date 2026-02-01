import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { productApi } from "./services/productApi";
export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    userInfo: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware)
});
