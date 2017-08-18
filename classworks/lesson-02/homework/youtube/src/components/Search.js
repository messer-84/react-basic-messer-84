import React from 'react';

const Search = props => {
  const { showVideo } = props;
  return (
    <div className="search-bar navbar">
      <input
        type="text"
        placeholder="Search"
        onChange={showVideo}
      />
    </div>
  );
};

export default Search;
