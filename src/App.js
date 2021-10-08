import RootComponent from "./components/RootComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cropper from "./components/Cropper";
function App() {
  return (
    <>
      <Router>
        <RootComponent />
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/crop" exact>
            <Cropper />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
