import {useState} from 'react';
import './HomePage.css';
import Search from "../../components/Search";
import SearchBar from "../../components/SearchBar"
import RecipeCard from "../../components/RecipeCard";

import LoginModal from '../LoginModal';
import axios from 'axios';
import React from 'react';
export default function HomePage() {
const [recipes, setRecipes] = useState([]);
React.useEffect(()=> {
    axios.get('http://localhost:5000/search')
      .then((response) => {
        console.log(response);
        setRecipes(response.data);
      });
    }, []);
const filterRecipe = (recipes, query) => {
  if (!query) {
      return recipes;
  }

  return recipes.filter((recipe) => {
      const recipeName = recipe.name.toLowerCase();
      return recipeName.includes(query);
  });
};
  const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredRecipe = filterRecipe(recipes, searchQuery);
  return(
      <div>
        {/*fonts*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
        {/*fonts*/}
        <link rel="stylesheet" href="./HomePage.css" />
        <div className="wrapper">
          <LoginModal />
            <div className="title">
              <h1>App</h1>
              <h2><em>Creating the best food, the best way.</em></h2>
            </div>
        </div>
        <div>
          <h3> What are you cooking today?</h3>
          <Search searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}/>
        </div>
        <div className="diets">
          <h3 className= "suggestion">Suggested recipes:</h3>
          {filteredRecipe.map((recipe, i) => {
            return (
              <RecipeCard
              recipeName = {recipe.name}
              recipeImage = {recipe.image}
              />
            )
          })}
        </div>
        </div>
      )
}
