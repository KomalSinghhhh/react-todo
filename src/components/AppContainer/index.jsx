import { Container, Paper, Stack } from "@mui/material";
import PropType from "prop-types";

const AppContainer = ({ children }) => {
  return (
    <Container component="main">
      <Paper
        component="section"
        variant="outlined"
        sx={{
          p: 2,
        }}
      >
        <Stack spacing={2}>{children}</Stack>
      </Paper>
    </Container>
  );
};

AppContainer.propTypes = {
  children: PropType.node.isRequired,
};

export default AppContainer;
