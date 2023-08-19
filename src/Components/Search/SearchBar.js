import 'remixicon/fonts/remixicon.css'
import './SearchBar.css'
import React from 'react'

const SearchBar = () => {
    return (
        <>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for venues.."
            />
          <i class="ri-search-2-line"></i>
        </div>
        </>
      );
}

export default SearchBar;
