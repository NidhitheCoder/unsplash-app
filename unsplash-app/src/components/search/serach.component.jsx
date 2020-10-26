import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {connect} from 'react-redux';

import "./search.styles.modules.scss";
import  {addSearchKeywordToStore} from '../../redux/image-collection/image-collection.action';

class SearchComonent extends React.Component {
  render() {

    let {addKeyword} = this.props;
    const searchChange = e => {
        let value = e.target.value;
      addKeyword(value);
    };
    return (
      <div className="search">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search by name"
          onChange={searchChange}
          className="search-bar"
        />
      </div>
    );
  }
};

const mapDispatchtoProps = (dispatch) => ({
addKeyword: keyword => dispatch(addSearchKeywordToStore(keyword))
})

export default connect(null,mapDispatchtoProps)(SearchComonent);
