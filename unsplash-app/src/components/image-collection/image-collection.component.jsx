import React from "react";
import "./image-collection.styles.modules.scss";

import ImageCard from "../image-card/image-card.compnent";


class ImageCollection extends React.Component {
  constructor(){
    super()
    this.state = {
      dataArr : []
    }
  }

  
  componentDidMount() {
    fetch("http://localhost:3000/Data")
      .then(response => response.json())
      .then(data => this.setState({dataArr:data}));
  }

  render() {
    return (
      <div className="image-collection">
        { this.state.dataArr.map(data => <ImageCard data={data} key={data.id} />)}
      </div>
    );
  }
}

export default ImageCollection;
