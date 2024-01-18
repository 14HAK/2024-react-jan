import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getPostApi = createAsyncThunk('getPostApi', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return data;
})

const postSliced = createSlice({
  name: "posts",
  initialState: { entities: [], loading: "idle" },
  reducers: {
    //...
  },
  extraReducers: (builder) => {
    builder.addCase(getPostApi.pending, (state, action) => {
      console.log(action);
      return;
    })

    builder.addCase(getPostApi.fulfilled, (state, action) => {
      console.log(action);
      const manage = state.entities;
      manage.push(...action.payload)
      return;
    })
    builder.addCase(getPostApi.rejected, (state, action) => {
      console.log(action);
      return;
    })
  },
});

export default postSliced.reducer;
export const postsData = getPostApi;