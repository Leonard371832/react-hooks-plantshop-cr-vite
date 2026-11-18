
import React from "react";

function Search({ searchQuerry, onSearchChange }) {
  return (
    <div className="searchbar">
       <label htmlFor="search">Search Plants:</label>
       <input 
          type="text"
          id="search"
          placeholder="Type a name to search..."
          value={searchQuerry}
          onChange={(e) => onSearchChange(e.target.value)}
       />
    </div>
  ); 
}

export default Search;



