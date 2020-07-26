import { createSlice } from "@reduxjs/toolkit";
import { initialValues } from "./TestList";

const initialState = initialValues;
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
export const selectAllProducts = (state) => state.products;

export const selectProductById = (state, productId) =>
  state.find((product) => product.id === productId);
