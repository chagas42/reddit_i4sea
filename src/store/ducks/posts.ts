import { createSlice } from '@reduxjs/toolkit';

const initialState:any[] = [];

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => [...state, action.payload],
    addPosts: (state, action) => [...action.payload]
  }
});

export const { addPost, addPosts } = postSlice.actions;

export default postSlice.reducer;
