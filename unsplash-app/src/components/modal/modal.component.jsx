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
    padding: theme.spacing(5),
    borderRadius: theme.spacing(3),
    outline: "none",
    outlineColor: "transparent",
    outlineStyle: "hidden",
  },
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
        {children}
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalComponent;
