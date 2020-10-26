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
    let { imgCollectionFromStore, imageCollection,searchKeyword} = this.props;
    imgCollectionFromStore = imgCollectionFromStore
      ? imgCollectionFromStore
      : [];

      let keyword = searchKeyword ? searchKeyword : "";
      const filteredArray = imgCollectionFromStore.filter(image =>{
        return image.title.toLowerCase().includes(keyword.toLowerCase());
      })
    return (
      <div className="image-collection">
        {filteredArray.map(data => (
          <ImageCard
            data={data}
            imageCollection={imageCollection}
            key={data.id}
          />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  imageCollection: data => dispatch(addImageCollectionToStore(data))
});

const mapStateToProps = state => ({
  imgCollectionFromStore: state.imageCollection.imageCollection,
  searchKeyword:state.imageCollection.searchWord
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageCollection);
