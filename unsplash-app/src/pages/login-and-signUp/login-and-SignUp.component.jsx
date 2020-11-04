import React from "react";
import "./login-and-signUp.styles.modules.scss";
import { connect } from "react-redux";

import Login from "../../components/login-component/login.component";
import SignUp from "../../components/signUp/signUp.component";

const LoginAndSignUp = props => {
  const { newUser } = props;
  return <div>{newUser ? <SignUp {...props} /> : <Login {...props} />}</div>;
};

const mapStateToProps = state => ({
  newUser: state.imageCollection.newUser
});

export default connect(mapStateToProps)(LoginAndSignUp);
