import { createSlice } from "@reduxjs/toolkit";

const dummyTasks = [
  {
    id: 1,
    title: "Buy milk",
    status: "todo",
  },
  {
    id: 2,
    title: "Buy eggs",
    status: "todo",
  },
  {
    id: 3,
    title: "Do homework",
    status: "inProgress",
  },
  {
    id: 4,
    title: "Cook dinner",
    status: "inProgress",
  },
  {
    id: 5,
    title: "Call mom",
    status: "done",
  },
];

let globalIdCounter = 5;

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    taskList: dummyTasks,
    editingTask: null,
  },
  reducers: {
    addTask: (state, action) => {
      state.taskList.push({
        id: globalIdCounter + 1,
        title: action.payload,
        status: "todo",
      });
      globalIdCounter++;
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
        task.id === action.payload.id
          ? {
              ...task,
              title: action.payload.task,
            }
          : task
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
