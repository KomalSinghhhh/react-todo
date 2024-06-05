import { Stack, Typography } from "@mui/material";
import reactLogo from "../../assets/react.svg";

const Header = () => {
  return (
    <Stack
      component="header"
      direction="row"
      spacing={2}
      p={2}
      mb={2}
      bgcolor="#222222"
    >
      <img src={reactLogo} alt="React Logo" />
      <Typography variant="h4" sx={{ color: "#fff" }}>
        Todo App
      </Typography>
    </Stack>
  );
};

export default Header;
