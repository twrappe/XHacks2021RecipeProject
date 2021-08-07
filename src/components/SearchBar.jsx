import React from 'react';
import "./SearchBar.css";

function SearchBar({description}) {
    return (
        <div className="searchwrap">
            <link rel="stylesheet" href="./SearchBar.css" />
            <input type="search" name="search" placeholder={description} />
        </div>
    )
}

export default SearchBar;