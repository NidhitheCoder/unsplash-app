import React from "react";
import "./navbar.styles.modules.scss";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

import ModalComponent from "../modal/modal.component";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        <Button
          variant="contained"
          className="add-photo-btn"
          onClick={handleOpen}
        >
          Add Photo
        </Button>
      </div>
      <ModalComponent open={open} handleClose={handleClose} >
      </ModalComponent>
    </div>
  );
};

export default Navbar;
