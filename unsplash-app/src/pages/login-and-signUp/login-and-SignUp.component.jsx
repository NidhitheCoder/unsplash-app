import React from "react";
import "./login-and-signUp.styles.modules.scss";

import Login from "../../components/login-component/login.component";
import SignUp from "../../components/signUp/signUp.component";

const LoginAndSignUp = props => {
  return <Login {...props} />;
  // <SignUp />
};

export default LoginAndSignUp;
