import React from 'react';
import "./RecipeCard.css";

function SearchBar({recipeName, recipeImage}) {
    return (
        <div className="card">
            <link rel="stylesheet" href="./RecipeCard.css" />
            <img src={recipeImage} alt={recipeName}/>
            <div className="title-container">
                <h4 className="title">{recipeName}</h4>
            </div>
        </div>
    )
}

export default SearchBar;