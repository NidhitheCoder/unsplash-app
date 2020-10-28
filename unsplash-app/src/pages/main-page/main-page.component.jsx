import React from "react";
import { connect } from "react-redux";
import "./main-page.styles.modules.scss";
import Navbar from "../../components/navbar/navbar.component";
import ImageCollection from "../../components/image-collection/image-collection.component";
import loadingSpinner from "../../components/loading-spinner/loading-spinner.component";

const ImageCollectionWithSpinner = loadingSpinner(ImageCollection);

class MainPage extends React.Component {
  render() {
    const { isFetching } = this.props;
    return (
      <div className="main-page-container">
        <Navbar />
        <ImageCollectionWithSpinner isLoading={!isFetching} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return{
  isFetching:state.imageCollection.isFetching
}}


export default connect(mapStateToProps)(MainPage);
