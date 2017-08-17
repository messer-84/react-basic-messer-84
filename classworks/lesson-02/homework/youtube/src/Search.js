import React, { Component } from 'react';

class Search extends Component {
  render() {
    const { showVideo } = this.props;

    return (
      <div className="search-bar navbar">
        <input
          type="text"
          placeholder="Search"
          onChange={showVideo}
        />
      </div>
    );
  }
}

export default Search;
