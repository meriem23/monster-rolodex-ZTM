import React, { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          placeholder={this.props.placeHolder}
          className={`search-box ${this.props.className}`}
          type="search"
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}
export default SearchBox;
