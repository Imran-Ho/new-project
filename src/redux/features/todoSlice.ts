import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TTask = {
  id: string;
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
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },
    toggleStatus: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((item) => item.id == action.payload);
      task!.isCompleted = !task?.isCompleted;
      // state.tasks = state.tasks.filter((t) => t.id !== action.payload);
      // const updatedTask = { ...task, isCompleted: true };
      // console.log(updatedTask);
      // if (updatedTask) {
      //   state.tasks.push(updatedTask);
      // } else {
      //   state.tasks.unshift(updatedTask);
      // }
    },
  },
});
export const { addTask, removeTask, toggleStatus } = todoSlice.actions;
export default todoSlice.reducer;
