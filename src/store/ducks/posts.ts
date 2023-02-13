import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE: any[] | (() => any[]) = [];

export const addPost = createAction('ADD_POST');
export const addPosts = createAction('ADD_POSTS');

export default createReducer(INITIAL_STATE, {
	[addPost.type]: (state, action) => [ ...state, action.payload ],
	[addPosts.type]: (state, action) => [ ...action.payload ]
});
