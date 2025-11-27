import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
import { taskApi } from "./api/api";

export const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
