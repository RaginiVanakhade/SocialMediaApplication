import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice"
import CartSlice from "./CardSlice"

const store = configureStore({
  reducer : {
    cart: CartSlice,
    products: ProductSlice
  }
})

export default store