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
      height: "40px",
      width: "100px",
      fontSize: "10px",
      marginRight: "1vw"
    }
  },
  cancel: {
    borderRadius: theme.spacing(3),
    height: "55px",
    minWidth: "100px",
    margin: "0 8px",
    width: "10vw",
    color: "#BDBDBD",
    "@media (max-width:560px)": {
      height: "40px",
      margin: "3vh 5vw",
      width: "100px"
    }
  },
  buttonContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "end"
  },
  submit: {
    backgroundColor: "#3db46d",
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
      height: "40px",
      width: "100px",
      fontSize: "10px",
      margin: "3vh 5vw"
    }
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
    const label = document.getElementById("photoLabel").value;
    const url = document.getElementById("photoUrl");
    const fd = new FormData();
    fd.append('image',url.files[0],url.files[0].name)
    if (label !== "" && url !== "") {
      // addSingleImage(label, fd, 112);
      addSingleImage(label,url.value,112);
      setOpen(false);
    } else {
      alert("Please fill all the fields..");
    }
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
          <form noValidate>
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
              <Grid item xs={2}></Grid>
              <Grid item xs={10} className={classes.buttonContainer}>
                <CustomButton
                  caption="cancel"
                  classes={classes.cancel}
                  onclick={handleClose}
                />
                <CustomButton
                  caption="Submit"
                  classes={classes.submit}
                  variant="contained"
                  onclick={AddImage}
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
  addSingleImage: (title, url, userId) =>
    dispatch(addSingleImageToStoreAsync(title, url, userId))
});

export default connect(null, mapDispatchToProps)(AddPhoto);
