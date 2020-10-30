import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import MainPage from "./pages/main-page/main-page.component";
import LoginAndSignUp from "./pages/login-and-signUp/login-and-SignUp.component";
import { ProtectedRoute } from "./auth/protected-route";

const App = () => {
  return (
    <Switch>
      <ProtectedRoute exact path="/home" component={MainPage} />
      <Route exact path="/" component={LoginAndSignUp} />
      <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
  );
};

export default App;
