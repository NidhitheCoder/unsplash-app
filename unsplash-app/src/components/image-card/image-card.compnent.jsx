import React from "react";
import "./image-card.styles.modules.scss";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import ModalComponent from "../modal/modal.component";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import CustomButton from "../custom-button/custom-button.component";
import {
  removeImageFromStoreAsync,
  loginWithCredentialsAsync
} from "../../redux/image-collection/image-collection.action";

const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: theme.spacing(3),
    "&:hover": {
      "& button": {
        display: "block"
      }
    }
  },
  delete: {
    position: "absolute",
    width: "6vw",
    top: theme.spacing(1),
    right: theme.spacing(1),
    borderRadius: theme.spacing(3),
    border: "1px solid #EB5757",
    color: "#EB5757",
    display: "none",
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "LowerCase",
    lineHeight: "14.63px"
  },
  button: {
    borderRadius: theme.spacing(3),
    height: "55px",
    width: "120px",
    margin: "0 8px",
    minWidth: "100px",
    color: "#BDBDBD",
    "@media (max-width:560px)": {
      height: "40px"
    }
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "end"
  }
}));

const ImageCard = ({
  data,
  removeImage,
  userName,
  loginWithUserNameAndPassword
}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const deleteImage = async () => {
    const password = document.getElementById("password").value;
    let loginData = await loginWithUserNameAndPassword(
      userName.username,
      password
    );

    if (loginData && loginData.access_token) {
      removeImage(data, password, userName);
      setOpen(false);
    }
  };

  const classes = useStyles();
  return (
    <div>
      <Card className={`image-card ${classes.card}`}>
        <div className="background-shade" />
        <CardMedia
          component="img"
          alt={data.label}
          image={data.name}
          title={data.label}
        />
        <CustomButton
          variant="outlined"
          caption="delete"
          classes={classes.delete}
          onclick={handleOpen}
        />
        <h3> {data.label}</h3>
      </Card>
      <ModalComponent open={open} handleClose={handleClose}>
        <Typography component="h1" variant="h5">
          Are you sure ?
        </Typography>
        <Box mt={3}>
          <form noValidate>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="caption">Password</Typography>
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="password"
                />
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={10} className={classes.buttonContainer}>
                <CustomButton
                  disabled
                  caption="Cancel"
                  classes={classes.button}
                  onclick={handleClose}
                />
                <CustomButton
                  variant="contained"
                  classes={classes.button}
                  color="secondary"
                  caption="Delete"
                  onclick={deleteImage}
                />
              </Grid>
            </Grid>
          </form>
        </Box>
      </ModalComponent>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeImage: (image, password) =>
    dispatch(removeImageFromStoreAsync(image, password)),
  loginWithUserNameAndPassword: (userName, password) =>
    dispatch(loginWithCredentialsAsync(userName, password))
});

const mapStateToProps = state => ({
  userName: state.imageCollection.user
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageCard);
