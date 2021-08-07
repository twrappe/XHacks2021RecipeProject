import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";

function Navbar({recipeName, recipeImage}) {
    return (

      <ul id="nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/saved">Saved Recipes</Link></li>
      </ul>
    )
}

export default Navbar;
