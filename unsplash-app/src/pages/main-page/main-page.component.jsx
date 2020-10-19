import React from "react";
import "./main-page.styles.modules.scss";
import Navbar from "../../components/navbar/navbar.component";
import ImageCollection from "../../components/image-collection/image-collection.component";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <h3>Main page body is here</h3>
        <p>lorem ipsm</p>
        <ImageCollection />
      </div>
    );
  }
}

export default MainPage;
