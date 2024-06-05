import { Box } from "@mui/material";
import TaskItem from "../TaskItem";

const TaskList = () => {
  return (
    <Box>
      {[1, 2, 3, 4, 5].map((task) => {
        return <TaskItem key={task} />;
      })}
    </Box>
  );
};

export default TaskList;
