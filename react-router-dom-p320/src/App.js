import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./components/pages/Home";
import Service from "./components/pages/Services";
import Error from "./components/pages/Error";
import { Redirect } from "react-router-dom";
import Login from "./components/pages/Auth";

const ProtectedRoute = ({ state, childeren, ...rest }) => {
  return state ? (
    <Route {...rest}>{childeren}</Route>
  ) : (
    <Redirect to={"/error"} />
  );
};

function App() {
  const [state, setState] = React.useState(false);
  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact>
          
        </Route> */}
        <Route path="/" exact component={Home} />
        {/* <Route path="/services" exact>
          <Service />
        </Route> */}

        <ProtectedRoute state={state} path="/services" component={Service} />
        <Route
          path={"/login"}
          exact
          component={() => <Login setState={setState} />}
        />
        {/* <Route path={"/login"} exact>
          <Login setState={setState} />
        </Route> */}
        <Route path={"/error"} exact component={Error} />
        <Redirect to={"/error"} exact />
      </Switch>
    </Router>
  );
}

export default App;
