import React from "react";
import { connect } from "react-redux";
import "./image-collection.styles.modules.scss";

import ImageCard from "../image-card/image-card.compnent";
import { fetchCollecitonsStartAsync } from "../../redux/image-collection/image-collection.action";

class ImageCollection extends React.Component {
  componentDidMount() {
    const { fetchCollecitonsStartAsync } = this.props;
    fetchCollecitonsStartAsync();
  }

  render() {
    let { imgCollectionFromStore, searchKeyword } = this.props;
    imgCollectionFromStore = imgCollectionFromStore
      ? imgCollectionFromStore
      : [];

    let keyword = searchKeyword ? searchKeyword : "";
    const filteredArray = imgCollectionFromStore.filter(image => {
      return image.title.toLowerCase().includes(keyword.toLowerCase());
    });
    return (
      <div className="image-collection">
        {filteredArray.map(data => (
          <ImageCard data={data} key={data.id} />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollecitonsStartAsync: () => dispatch(fetchCollecitonsStartAsync())
});

const mapStateToProps = state => ({
  imgCollectionFromStore: state.imageCollection.imageCollection,
  searchKeyword: state.imageCollection.searchWord
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageCollection);
