import React from "react";

function Search({searchedPlant, setSearchedPlant }) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchedPlant}
        onChange={(e) => setSearchedPlant(e.target.value)}
      />
    </div>
  );
}

export default Search;
