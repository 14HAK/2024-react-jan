import { createSlice } from "@reduxjs/toolkit";
import { manage } from "./new";


const counterSlice = createSlice({
  name: 'counter',
  initialState: [
    { name: 'korim', age: 22 },
    { name: 'basar', age: 20 },
    { name: 'loffer', age: 28 },
  ],
  reducers: {
    up: (state, action) => {
      manage('second print!')
      return [...state, action.payload];
    },
    down: (state, action) => {
      const newName = action.payload.payload.name;
      state[0].name = newName
      return state;
    },
  }
})

export const { up, down } = counterSlice.actions;
export default counterSlice.reducer;