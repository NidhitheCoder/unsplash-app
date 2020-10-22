import React from "react";
import "./navbar.styles.modules.scss";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import ModalComponent from "../modal/modal.component";
import CustomButton from "../custom-button/custom-button.component";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

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
  cancel:{
    borderRadius:theme.spacing(3),
    height:"55px",
    minWidth:"137px",
    color:"#BDBDBD"
  }
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="header">
      <div className="header-part">
        <Typography className="logo">My Unsplash</Typography>
        <div className="search">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <InputBase placeholder="Search by name" className="search-bar" />
        </div>
      </div>
      <div className="header-part">
        <CustomButton
          variant="contained"
          classes={classes.button}
          caption="Add Photo"
          onclick={handleOpen}
        />
      </div>
      <ModalComponent open={open} handleClose={handleClose}>
        <Typography component="h1" variant="h5">
          Add a new photo
        </Typography>
        <Box mt={3}>
          <Grid container xs={12}>
            <Grid item xs={12}>
              <Typography variant="p">Label</Typography>
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
              <Typography variant="p">Photo URL</Typography>
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
              <CustomButton caption="cancel" classes={classes.cancel} onclick={handleClose} />
            </Grid>
            <Grid item xs={2}>
              <CustomButton
                caption="Submit"
                classes={classes.button}
                variant="contained"
                onclick={() => {
                  alert("haiii");
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </ModalComponent>
    </div>
  );
};

export default Navbar;
