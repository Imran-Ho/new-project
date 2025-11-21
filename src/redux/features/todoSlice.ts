import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTask = {
  title: string;
  description: string;
  isCompleted?: boolean;
};
type TInitialState = {
  tasks: TTask[];
};
const initialState: TInitialState = {
  tasks: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TTask>) => {
      state.tasks.push({ ...action.payload, isCompleted: false });
    },
  },
});
export const { addTask } = todoSlice.actions;
export default todoSlice.reducer;
