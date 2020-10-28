import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import {connect} from 'react-redux';

import "./search.styles.modules.scss";
import  {addSearchKeywordToStoreAsync} from '../../redux/image-collection/image-collection.action';

class SearchComonent extends React.Component {
  state = {
    search :""
  };

  render() {

    let {addKeyword} = this.props;
    const searchChange = e => {
        let value = e.target.value;
        this.setState({search:value})
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
          value={this.state.search}
        />
      </div>
    );
  }
};

const mapDispatchtoProps = (dispatch) => ({
addKeyword: keyword => dispatch(addSearchKeywordToStoreAsync(keyword))
})

export default connect(null,mapDispatchtoProps)(SearchComonent);
