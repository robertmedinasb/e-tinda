import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./../features/User/userSlice";
import productsReducer from "./../features/Products/productsSlice";

export default configureStore({
  reducer: {
    current_user: userReducer,
    products: productsReducer,
  },
});
