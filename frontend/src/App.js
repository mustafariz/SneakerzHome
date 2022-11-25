import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import LoginFormPage from "./components/LoginFormPage";

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <LoginFormPage />
      </Route>
    </Switch>
    </>
  );
}

export default App;
