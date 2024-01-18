import { configureStore } from "@reduxjs/toolkit";
import productStatesSlice from "./productSlice";
import postSliced from "./postSlice"

const store = configureStore({
  reducer: {
    productSlice: productStatesSlice,
    posts: postSliced,
  }
})

export default store;