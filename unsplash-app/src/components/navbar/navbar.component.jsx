import React from "react";
import "./navbar.styles.modules.scss";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => (
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
      <Button variant="contained" className="add-photo-btn">
        Add Photo
      </Button>
    </div>
  </div>
);

export default Navbar;
