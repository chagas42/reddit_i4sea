import { configureStore } from '@reduxjs/toolkit';
import { Post } from '../components/PostItem';

import rootPosts from './ducks/posts';

export interface RootState {
  posts: Post[] | (() => Post[]);
}
export default configureStore({
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
	reducer: {
		posts: rootPosts,
	}
});
