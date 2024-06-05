import { taskSlice } from "../slices/taskSlice";

export const {
  addTask,
  deleteTask,
  startEditAction,
  cancelEditAction,
  editTask,
  changeStatus,
} = taskSlice.actions;
