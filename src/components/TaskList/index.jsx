import { Stack } from "@mui/material";
import TaskItem from "../TaskItem";

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

const TaskList = () => {
  return (
    <Stack spacing={1}>
      {dummyTasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </Stack>
  );
};

export default TaskList;
