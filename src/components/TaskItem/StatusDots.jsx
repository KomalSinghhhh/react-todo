import React from "react";
import { Stack, Tooltip } from "@mui/material";
import { colors } from "@mui/material";
import PropTypes from "prop-types";

const Dot = React.forwardRef(function Dot({ color, ...props }, ref) {
  return (
    <div
      ref={ref}
      {...props}
      style={{
        width: 15,
        height: 15,
        borderRadius: "50%",
        backgroundColor: color,
      }}
    ></div>
  );
});

Dot.propTypes = {
  color: PropTypes.string.isRequired,
};

const StatusDots = ({ task }) => {
  return (
    <Stack direction="row" spacing={1} sx={{ cursor: "pointer" }}>
      <Tooltip title="To Do" placement="top" arrow>
        <Dot color={task.status === "todo" ? colors.red[400] : "gray"} />
      </Tooltip>
      <Tooltip title="In Progress" placement="top" arrow>
        <Dot
          color={task.status === "inProgress" ? colors.yellow[900] : "gray"}
        />
      </Tooltip>
      <Tooltip title="Done" placement="top" arrow>
        <Dot color={task.status === "done" ? colors.green[500] : "gray"} />
      </Tooltip>
    </Stack>
  );
};

StatusDots.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.oneOf(["todo", "inProgress", "done"]).isRequired,
  }).isRequired,
};

export default StatusDots;
