import React from "react";
import "./main-page.styles.modules.scss";
import Navbar from "../../components/navbar/navbar.component";
import ImageCollection from "../../components/image-collection/image-collection.component";

class MainPage extends React.Component {
  render() {
    return (
      <div className="main-page-container">
        <Navbar {...this.props}/>
        <ImageCollection />
      </div>
    );
  }
}

export default MainPage;
