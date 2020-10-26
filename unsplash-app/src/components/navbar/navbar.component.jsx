import React from "react";
import "./navbar.styles.modules.scss";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

import AddPhoto from "../addPhoto/addPhoto.component";
import { addSingleImageToStore } from "../../redux/image-collection/image-collection.action";
import SearchComponent from '../search/serach.component';

class Navbar extends React.Component {
  render() {
    let { addSingleImage } = this.props;
    return (
      <div className="header">
        <div className="header-part">
          <Typography className="logo">My Unsplash</Typography>
          <SearchComponent />
        </div>
        <div className="header-part">
          <AddPhoto addSingleImage={addSingleImage} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addSingleImage: image => dispatch(addSingleImageToStore(image))
});

export default connect(null, mapDispatchToProps)(Navbar);
