import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import './search.styles.modules.scss';

const SearchComonent = () => {

    const searchChange = () => {
console.log("haiii");
    }
  return (
    <div className="search">
      <div className="search-icon">
        <SearchIcon />
      </div>
      <InputBase placeholder="Search by name" onChange={searchChange} className="search-bar" />
    </div>
  );
};

export default SearchComonent;
