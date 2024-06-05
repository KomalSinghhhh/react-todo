import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Add } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";

import { addTask, editTask } from "../../actions/taskActions";
import { selectEditingTask } from "../../slices/taskSlice";

const TaskInput = () => {
  const editingTask = useSelector(selectEditingTask);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editingTask) {
      setTask(editingTask.title);
    }
  }, [editingTask]);

  const onAddOrEditTask = () => {
    if (editingTask) {
      dispatch(
        editTask({
          id: editingTask.id,
          task,
        })
      );
    } else {
      dispatch(addTask(task));
    }
    setTask("");
  };

  return (
    <Stack direction="row" spacing={2}>
      <TextField
        label="Task"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") onAddOrEditTask();
        }}
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={!editingTask ? <Add /> : null}
        sx={{
          minWidth: "120px",
        }}
        onClick={onAddOrEditTask}
      >
        {editingTask ? "Update" : "Add"}
      </Button>
    </Stack>
  );
};

export default TaskInput;
