import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const manageAsync = createAsyncThunk('loadPost100', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json();
  console.log('function trigged!');
  return data;
})

const counterSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {
    up: (state, action) => {
      return [...state, action.payload];
    },
    down: (state, action) => {
      const newName = action.payload.payload.name;
      state[0].name = newName
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(manageAsync.fulfilled, (state, action) => {

      return [...state, action.payload]
    })
  }

})

export const { up, down } = counterSlice.actions;
export default counterSlice.reducer;