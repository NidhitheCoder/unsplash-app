import React from "react";
import "./navbar.styles.modules.scss";
import Typography from "@material-ui/core/Typography";

import AddPhoto from "../addPhoto/addPhoto.component";
import SearchComponent from "../search/search.component";

const Navbar = () => (
  <div className="header">
    <div className="header-part">
      <Typography className="logo">My Unsplash</Typography>
      <SearchComponent />
    </div>
    <div className="header-part">
      <div />
      <AddPhoto />
    </div>
  </div>
);

export default Navbar;
