import React from "react";
import "./image-collection.styles.modules.scss";

import ImageCard from "../image-card/image-card.compnent";
import {getImgCollection} from '../../api_calls/api-calls';


class ImageCollection extends React.Component {
  constructor(){
    super()
    this.state = {
      dataArr : []
    }
  }

  
 async componentDidMount() {
    let imgColelction = await getImgCollection("/data");
    this.setState({dataArr:imgColelction});
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
