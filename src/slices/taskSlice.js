import { createSlice } from "@reduxjs/toolkit";

const loadTasksFromLocalStorage = () => {
  const serializedTasks = localStorage.getItem("tasks");
  if (serializedTasks === null) {
    return [];
  }
  return JSON.parse(serializedTasks);
};

const saveTasksToLocalStorage = (tasks) => {
  const serializedTasks = JSON.stringify(tasks);
  localStorage.setItem("tasks", serializedTasks);
};

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

const initialState = {
  taskList: loadTasksFromLocalStorage() || dummyTasks,
  editingTask: null,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: globalIdCounter + 1,
        title: action.payload,
        status: "todo",
      };
      state.taskList.push(newTask);
      globalIdCounter++;
      saveTasksToLocalStorage(state.taskList);
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload
      );
      saveTasksToLocalStorage(state.taskList);
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
      saveTasksToLocalStorage(state.taskList);
    },
    changeStatus: (state, action) => {
      const task = state.taskList.find((task) => task.id === action.payload.id);
      task.status = action.payload.status;
      saveTasksToLocalStorage(state.taskList);
    },
  },
});

export default taskSlice.reducer;

export const selectTaskList = (state) => state.task.taskList;
export const selectEditingTask = (state) => state.task.editingTask;
