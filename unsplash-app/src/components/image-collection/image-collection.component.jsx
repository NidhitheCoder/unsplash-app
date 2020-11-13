import React from "react";
import { connect } from "react-redux";
import "./image-collection.styles.modules.scss";

import ImageCard from "../image-card/image-card.compnent";
import {
  fetchCollecitonsStartAsync,
  loginWithRefreshToken
} from "../../redux/image-collection/image-collection.action";
import { LoadingSpinner } from "../loading-spinner/loading-spinner.component";
import { eligibleToken } from "../../auth/token-manipulate";
import NoImageMessage from "../no-image/noImage.component";

class ImageCollection extends React.Component {
  componentDidMount() {
    const { fetchCollecitonsStartAsync, loginWithRefreshToken } = this.props;
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    if (eligibleToken(access_token)) {
      fetchCollecitonsStartAsync();
    } else if (eligibleToken(refresh_token)) {
      loginWithRefreshToken(refresh_token);
    } else {
      this.props.history.push("/");
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
  }

  render() {
    let { imgCollectionFromStore, searchKeyword, fetchComplete } = this.props;
    imgCollectionFromStore = imgCollectionFromStore
      ? imgCollectionFromStore
      : [];
    let keyword = searchKeyword ? searchKeyword : "";
    const filteredArray = imgCollectionFromStore.filter(image => {
      return image.label.toLowerCase().includes(keyword.toLowerCase());
    });
    return (
      <div>
        {fetchComplete ? (
          filteredArray.length > 0 ? (
            <div className="image-collection">
              {filteredArray.map(data => (
                <ImageCard data={data} key={data.id} />
              ))}
            </div>
          ) : (
            <NoImageMessage />
          )
        ) : (
          <LoadingSpinner />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollecitonsStartAsync: () => dispatch(fetchCollecitonsStartAsync()),
  loginWithRefreshToken: () => dispatch(loginWithRefreshToken())
});

const mapStateToProps = state => ({
  imgCollectionFromStore: state.imageCollection.imageCollection,
  searchKeyword: state.imageCollection.searchWord,
  fetchComplete: state.imageCollection.fetchComplete
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageCollection);
