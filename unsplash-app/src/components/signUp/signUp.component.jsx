import React from "react";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
// import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Copyright } from "../copyright/copyright.component";
import CustomButton from "../custom-button/custom-button.component";
import auth from "../../auth/auth";

import {
  toggleUserAsync,
  signUpWithCredentialAsync
} from "../../redux/image-collection/image-collection.action";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#3db46d",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#3db46d"
    }
  },
  link: {
    cursor: "pointer"
  }
}));

const SignUp = props => {
  const { toggleUser, userSignUp } = props;

  const signUpWithCredential = async () => {
    const userName = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    await userSignUp(userName, password);
    auth.login(() => {
      props.history.push("/home");
    });
  };
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="lname"
                name="lastName"
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                margin="normal"
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="Password"
                margin="normal"
                name="password"
                variant="outlined"
                type="password"
                required
                fullWidth
                id="password"
                label="Password"
              />
            </Grid>
          </Grid>
          <CustomButton
            fullWidth
            caption="Sign Up"
            variant="contained"
            color="primary"
            classes={classes.submit}
            onclick={signUpWithCredential}
          />
          <Grid container justify="flex-end">
            <Grid item margin={4}>
              <Link
                className={classes.link}
                variant="body2"
                onClick={toggleUser}
              >
                Already have an account ? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleUser: () => dispatch(toggleUserAsync(false)),
  userSignUp: (userName, password) =>
    dispatch(signUpWithCredentialAsync(userName, password))
});

export default connect(null, mapDispatchToProps)(SignUp);
