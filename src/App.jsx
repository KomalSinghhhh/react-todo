import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import AppContainer from "./components/AppContainer";
import { Divider } from "@mui/material";

const App = () => {
  return (
    <>
      <Header />
      <AppContainer>
        <TaskInput />
        <Divider />
        <TaskList />
      </AppContainer>
    </>
  );
};

export default App;
