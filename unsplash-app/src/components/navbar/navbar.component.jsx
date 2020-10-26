import React from "react";
import "./navbar.styles.modules.scss";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from "react-redux";

import AddPhoto from "../addPhoto/addPhoto.component";
import { addSingleImageToStore } from "../../redux/image-collection/image-collection.action";

class Navbar extends React.Component {
  render() {
    let { addSingleImage } = this.props;
    return (
      <div className="header">
        <div className="header-part">
          <Typography className="logo">My Unsplash</Typography>
          <div className="search">
            <div className="search-icon">
              <SearchIcon />
            </div>
            <InputBase placeholder="Search by name" className="search-bar" />
          </div>
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
