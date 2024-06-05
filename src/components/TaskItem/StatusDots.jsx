import React from "react";
import { useDispatch } from "react-redux";
import { Stack, Tooltip } from "@mui/material";
import { colors } from "@mui/material";
import PropTypes from "prop-types";

import { changeStatus } from "../../actions/taskActions";

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
  const dispatch = useDispatch();

  return (
    <Stack direction="row" spacing={1} sx={{ cursor: "pointer" }}>
      <Tooltip title="To Do" placement="top" arrow>
        <Dot
          color={task.status === "todo" ? colors.red[400] : "gray"}
          onClick={() =>
            dispatch(changeStatus({ id: task.id, status: "todo" }))
          }
        />
      </Tooltip>
      <Tooltip title="In Progress" placement="top" arrow>
        <Dot
          color={task.status === "inProgress" ? colors.yellow[900] : "gray"}
          onClick={() =>
            dispatch(changeStatus({ id: task.id, status: "inProgress" }))
          }
        />
      </Tooltip>
      <Tooltip title="Done" placement="top" arrow>
        <Dot
          color={task.status === "done" ? colors.green[500] : "gray"}
          onClick={() =>
            dispatch(changeStatus({ id: task.id, status: "done" }))
          }
        />
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
