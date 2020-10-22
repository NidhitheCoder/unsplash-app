import React from "react";
import "./navbar.styles.modules.scss";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5]
  }
}));



const Navbar = () => {
  const classes = useStyles();
  const [open,setOpen] = React.useState(false);
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
        <Button variant="contained" className="add-photo-btn" onClick={handleOpen}>
          Add Photo
        </Button>
      </div>

      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">Spring Modal</h2>
            <p id="spring-Modal-description">React spring animates me</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Navbar;
