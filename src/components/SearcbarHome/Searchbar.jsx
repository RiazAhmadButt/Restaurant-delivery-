import React from "react";
import searchIcon from '../../images/serachIcon.png';
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="serachbar">
      <div className="search-bar-container">
        <img src={searchIcon} alt="Search Icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants, cuisines, and dishes"
        />
      </div>
    </div>
  );
};

export default SearchBar;
