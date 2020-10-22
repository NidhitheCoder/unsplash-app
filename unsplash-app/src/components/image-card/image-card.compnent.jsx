import React from "react";
import "./image-card.styles.modules.scss";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import ModalComponent from "../modal/modal.component";

import CustomButton from "../custom-button/custom-button.component";

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
  }
}));

const ImageCard = ({ data }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <Card className={`image-card ${classes.card}`}>
      <div className="background-shade" />
      <CardMedia
        component="img"
        alt={data.title}
        image={data.imgUrl}
        title={data.title}
      />
      <CustomButton
        variant="outlined"
        caption="delete"
        classes={classes.delete}
        onclick={handleOpen}
      />
      <h3> {data.title}</h3>
      <ModalComponent open={open} handleClose={handleClose}>
        Do you want to delete this image??
      </ModalComponent>
    </Card>
  );
};

export default ImageCard;
