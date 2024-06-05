import { Add } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";

const TaskInput = () => {
  return (
    <Stack direction="row" spacing={2}>
      <TextField label="Task" variant="outlined" fullWidth />
      <Button
        variant="contained"
        color="primary"
        endIcon={<Add />}
        sx={{
          minWidth: "120px",
        }}
      >
        Add
      </Button>
    </Stack>
  );
};

export default TaskInput;
