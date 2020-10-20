import React from "react";
import "./image-card.styles.modules.scss";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const ImageCard = ({ data }) => {
  return (
    <Card className="image-card">
      <CardMedia
        component="img"
        alt={data.title}
        image={data.imgUrl}
        title={data.title}
      ></CardMedia>
      <h3> {data.title}</h3>
    </Card>
  );
};

export default ImageCard;
