import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    taskList: [],
    editingTask: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload
      );
    },
    startEditAction: (state, action) => {
      state.editingTask = action.payload;
    },
    cancelEditAction: (state) => {
      state.editingTask = null;
    },
    editTask: (state, action) => {
      state.taskList = state.taskList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
      state.editingTask = null;
    },
    changeStatus: (state, action) => {
      const task = state.taskList.find((task) => task.id === action.payload.id);
      task.status = action.payload.status;
    },
  },
});

export default taskSlice.reducer;

export const selectTaskList = (state) => state.task.taskList;
export const selectEditingTask = (state) => state.task.editingTask;
