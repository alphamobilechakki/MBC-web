import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../redux/slices/CategorySlice";
import authReducer from "../redux/slices/AuthSlice";
import productReducer from "../redux/slices/ProductSlice"; // ✅ add product slice

export const Store = configureStore({
  reducer: {
    categories: categoryReducer,
    auth: authReducer,
    products: productReducer, // ✅ register slice here
  },
});
