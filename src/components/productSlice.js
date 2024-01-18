import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'productSlice',
  initialState: {
    entities: [
      { name: 'iphone', model: '13.6.2', price: 120000 },
      { name: 'samsung', model: '125.23', price: 90000 },
      { name: 'i-Tell', model: '122.8', price: 80000 },
    ],
    loading: 'idle'
  },
  reducers: {
    addProduct: (state, action) => {
      const manage = state.entities;
      manage.push(action.payload.payload)
      return;
    },
    removeProduct: (state, action) => {
      const manage = state.entities;
      manage.pop()
      return;
    },
  }
})

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;