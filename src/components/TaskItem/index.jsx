import { Box, Stack, Typography } from "@mui/material";
import PropTypes from "prop-types";
import StatusDots from "./StatusDots";
import { Delete, Edit } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteTask, startEditAction } from "../../actions/taskActions";

function getStatusColor(status) {
  switch (status) {
    case "todo":
      return "transparent";
    case "inProgress":
      return "#fef08a";
    case "done":
      return "#f5f5f5";
  }
}

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <Stack
      className="task-item"
      direction="row"
      alignItems="center"
      spacing={2}
      borderRadius={2}
      p={1}
      sx={{
        ":hover": {
          backgroundColor: task.status === "inProgress" ? "#fef08a" : "#f5f5f5",
        },
        backgroundColor: getStatusColor(task.status),
      }}
    >
      <StatusDots task={{ id: task.id, status: task.status }} />
      <Typography
        variant="h6"
        sx={{
          textDecoration: task.status === "done" ? "line-through" : "none",
        }}
        color={task.status === "done" ? "text.disabled" : "text.primary"}
      >
        {task.title}
      </Typography>
      <Box sx={{ flexGrow: 1 }} />
      <Stack direction="row" spacing={1} sx={{ cursor: "pointer" }}>
        <Edit
          color="secondary"
          onClick={() => dispatch(startEditAction(task))}
        />
        <Delete color="error" onClick={() => dispatch(deleteTask(task.id))} />
      </Stack>
    </Stack>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["todo", "inProgress", "done"]).isRequired,
  }).isRequired,
};

export default TaskItem;
