import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

import ModalComponent from "../modal/modal.component";
import CustomButton from "../custom-button/custom-button.component";
import TextField from "@material-ui/core/TextField";
import { addSingleImageToStoreAsync } from "../../redux/image-collection/image-collection.action";

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: "#3db46d",
    position: "absolute",
    right: "2vw",
    top: "2vh",
    width: "10vw",
    color: "#fff",
    borderRadius: theme.spacing(3),
    fontSize: "14px",
    fontWeight: 700,
    fontStyle: "normal",
    lineHeight: "19.07px",
    minWidth: "100px",
    height: "55px",
    "&:hover": {
      backgroundColor: "#3db46d"
    },
    "@media (max-width:560px)": {
      height: "30px",
      width:"100px",
      fontSize:"10px",
      marginRight:"1vw"
    }
  },
  cancel: {
    borderRadius: theme.spacing(3),
    height: "55px",
    minWidth: "137px",
    color: "#BDBDBD",
    "@media (max-width:560px)": {
      height: "30px",
      margin: "0 5vw"
    }
  },
  buttonContainer: {
    position: "relative"
  }
}));

const AddPhoto = ({ addSingleImage }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const AddImage = async () => {
    const label = document.getElementById("photoLabel");
    const url = document.getElementById("photoUrl");
    addSingleImage(label.value,URL.createObjectURL(url.files[0]), 112);
    setOpen(false);
  };

  return (
    <div>
      <CustomButton
        variant="contained"
        classes={classes.button}
        caption="Add Photo"
        onclick={handleOpen}
      />
      <ModalComponent open={open} handleClose={handleClose}>
        <Typography component="h1" variant="h5">
          Add a new photo
        </Typography>
        <Box mt={3}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="caption">Label</Typography>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                required
                id="photoLabel"
                placeholder="Suspendisse elit massa"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption">Photo URL</Typography>
                <input type="file" id="photoUrl" name="image" />
            </Grid>
            <Grid item xs={5}></Grid>
            <Grid item xs={2}>
              <CustomButton
                caption="cancel"
                classes={classes.cancel}
                onclick={handleClose}
              />
            </Grid>
            <Grid item xs={2} className={classes.buttonContainer}>
              <CustomButton
                caption="Submit"
                classes={classes.button}
                variant="contained"
                onclick={AddImage}
              />
            </Grid>
          </Grid>
        </Box>
      </ModalComponent>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addSingleImage: (title, url, userId) =>
    dispatch(addSingleImageToStoreAsync(title, url, userId))
});

export default connect(null, mapDispatchToProps)(AddPhoto);
