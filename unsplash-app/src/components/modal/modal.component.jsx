import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(10),
    borderRadius: theme.spacing(3),
    outline: "none",
    outlineColor: "transparent",
    outlineStyle: "hidden",
    color: "green"
  }
}));

const ModalComponent = ({ open, handleClose,children }) => {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
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
          <h2 id="transition-modal-title">Add Photo</h2>
          <p id="transition-Modal-description">This modal for display</p>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalComponent;
