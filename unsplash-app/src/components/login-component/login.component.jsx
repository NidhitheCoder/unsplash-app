import React from "react";
import "./login.styles.modules.scss";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Copyright } from "../copyright/copyright.component";
import CustomButton from "../custom-button/custom-button.component";
import auth from "../../auth/auth";
import {
  toggleUserAsync,
  loginWithCredentialsAsync,
  loginWithRefreshToken
} from "../../redux/image-collection/image-collection.action";
import { connect } from "react-redux";
import { eligibleToken } from "../../auth/token-manipulate";

const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "white",
    height:"40px",
    width:"40px",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
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
  },
  logoImg:{
    height:"40px",
    width:"40px"
  }
});

// check token eligibility for enable protected routes without login(login with password).
const tokenBasedRouting = props => {
  const { loginWithRefreshToken } = props;
  const refresh_token = localStorage.getItem("refresh_token");
  const accessToken = localStorage.getItem("access_token");
  if (eligibleToken(accessToken)) {
    auth.login(() => {
      props.history.push("/home");
    });
  } else if (eligibleToken(refresh_token)) {
    loginWithRefreshToken(refresh_token);
    auth.login(() => {
      props.history.push("/home");
    });
  }
};

class Login extends React.Component {
  componentDidMount = () => {
    tokenBasedRouting(this.props);
  };
  render() {
    const { toggleUser, userLogin, classes } = this.props;
    const loginWithCredential = async () => {
      const userName = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (userName !== "" && password !== "") {
        await userLogin(userName, password);
        let newAccessToken = localStorage.getItem("access_token");
        if (eligibleToken(newAccessToken)) {
          auth.login(() => {
            this.props.history.push("/home");
          });
        } else {
          alert("Unauthorized Action");
        }
      } else {
        alert("Please fill all the fields");
      }
    };

    return (
      <div>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <img src={require('../../assets/icon.png')} className={classes.logoImg} alt="icon" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                required
                id="username"
                label="Username"
                name="username"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                required
                id="password"
                name="password"
                type="password"
                label="Password"
                autoComplete="password"
              />
              <CustomButton
                variant="contained"
                caption="Sign in"
                classes={classes.submit}
                onclick={loginWithCredential}
              />
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Link
                    className={classes.link}
                    variant="body2"
                    onClick={toggleUser}
                  >
                    {"Dont you have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleUser: () => dispatch(toggleUserAsync(true)),
  userLogin: (userName, password) =>
    dispatch(loginWithCredentialsAsync(userName, password)),
  loginWithRefreshToken: refresh_token =>
    dispatch(loginWithRefreshToken(refresh_token))
});

export default withStyles(useStyles)(connect(null, mapDispatchToProps)(Login));
