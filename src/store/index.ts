import { configureStore } from '@reduxjs/toolkit';

import rootPosts from './ducks/posts';

export default configureStore({
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
	reducer: {
		posts: rootPosts,
	}
});
