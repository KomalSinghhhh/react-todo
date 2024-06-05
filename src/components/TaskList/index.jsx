import { Stack } from "@mui/material";
import TaskItem from "../TaskItem";
import { useSelector } from "react-redux";
import { selectTaskList } from "../../slices/taskSlice";

const TaskList = () => {
  const tasks = useSelector(selectTaskList);

  return (
    <Stack spacing={1}>
      {tasks.map((task) => {
        return <TaskItem key={task.id} task={task} />;
      })}
    </Stack>
  );
};

export default TaskList;
