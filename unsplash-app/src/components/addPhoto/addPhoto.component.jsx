import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {connect} from 'react-redux';

import ModalComponent from "../modal/modal.component";
import CustomButton from "../custom-button/custom-button.component";
import TextField from "@material-ui/core/TextField";
import { addSingleImageToStoreAsync } from "../../redux/image-collection/image-collection.action";

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: "#3db46d",
    color: "#fff",
    borderRadius: theme.spacing(3),
    fontSize: "14px",
    fontWeight: 700,
    fontStyle: "normal",
    lineHeight: "19.07px",
    minWidth: "137px",
    height: "55px",
    "&:hover": {
      backgroundColor: "#3db46d"
    }
  },
  cancel: {
    borderRadius: theme.spacing(3),
    height: "55px",
    minWidth: "137px",
    color: "#BDBDBD"
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
    addSingleImage(label.value, url.value, 112);
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
              <TextField
                variant="outlined"
                margin="normal"
                type="file"
                fullWidth
                required
                id="photoUrl"
                placeholder="https://images.unsplash.com/photo-16032866..."
              />
            </Grid>
            <Grid item xs={8}></Grid>
            <Grid item xs={2}>
              <CustomButton
                caption="cancel"
                classes={classes.cancel}
                onclick={handleClose}
              />
            </Grid>
            <Grid item xs={2}>
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
  addSingleImage:(title,url,userId) => dispatch(addSingleImageToStoreAsync(title,url,userId))
})

export default connect(null,mapDispatchToProps)(AddPhoto);
