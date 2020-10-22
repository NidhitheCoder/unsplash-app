import React from "react";
import "./navbar.styles.modules.scss";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";

import ModalComponent from "../modal/modal.component";
import CustomButton from '../custom-button/custom-button.component';

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
        <CustomButton
          variant="contained"
          classes="add-photo-btn"
          caption="Add Photo"
          onclick={handleOpen}
         />

      </div>
      <ModalComponent open={open} handleClose={handleClose} >
      </ModalComponent>
    </div>
  );
};

export default Navbar;
