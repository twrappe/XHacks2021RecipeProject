import {React, useState}  from 'react';
import './HomePage.css';
import SearchBar from "../../components/SearchBar"
import RecipeCard from "../../components/RecipeCard"
import meal1 from '../img/1_meal.jpg';
import LoginModal from '../../components/LoginModal';


export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dummyRecipes = [{
    name: "A Recipe",
    image: meal1
  },
  {
    name: "A Recipe",
    image: meal1
  },
  {
    name: "A Recipe",
    image: meal1
  },
  {
    name: "A Recipe",
    image: meal1
  },
  {
    name: "A Recipe",
    image: meal1
  }]

  return(
      <div>
        <link rel="stylesheet" href="./HomePage.css" />
        <div className="wrapper">
        <LoginModal />
          <div className="title">
            <h1>App</h1>
            <h2><em>Creating the best food, the best way.</em></h2>
          </div>
            <div className="cta">
              <h3> What are you cooking today?</h3>
              <SearchBar description="Search by recipe name"/>
            </div>
        </div>
        <div className="diets">
          <h3 className= "suggestion">Suggested recipes:</h3>
          {dummyRecipes.map((recipe, i) => {
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
