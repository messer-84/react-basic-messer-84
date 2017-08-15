import React, { Component } from 'react';

class SearchComp extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="search-bar navbar">
        <input type="text" placeholder="Search" />
      </div>
    );
  }
}

export default SearchComp