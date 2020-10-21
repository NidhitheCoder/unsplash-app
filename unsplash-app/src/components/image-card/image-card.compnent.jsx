import React from "react";
import "./image-card.styles.modules.scss";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card : {
    borderRadius:theme.spacing(3)
  }
}))

const ImageCard = ({ data }) => {
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
      <h3> {data.title}</h3>
    </Card>
  );
};

export default ImageCard;
