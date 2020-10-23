import React from "react";
import { connect } from "react-redux";
import "./image-collection.styles.modules.scss";

import ImageCard from "../image-card/image-card.compnent";
import { getImgCollection } from "../../api_calls/api-calls";
import { addImageCollectionToStore } from "../../redux/image-collection/image-collection.action";

class ImageCollection extends React.Component {
  async componentDidMount() {
    let { imageCollection } = this.props;
    let dataCollection = await getImgCollection("/data");
    imageCollection(dataCollection);
  }

  render() {
    let { imgCollectionFromStore } = this.props;
    imgCollectionFromStore = imgCollectionFromStore
      ? imgCollectionFromStore
      : [];
    return (
      <div className="image-collection">
        {imgCollectionFromStore.map(data => (
          <ImageCard data={data} key={data.id} />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  imageCollection: data => dispatch(addImageCollectionToStore(data))
});

const mapStateToProps = state => ({
  imgCollectionFromStore: state.imageCollection.imageCollection
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageCollection);
