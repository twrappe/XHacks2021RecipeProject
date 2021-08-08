import {React} from 'react';
import './SavedRecipes.css';
import SearchBar from '../components/SearchBar';
import RecipeCard from "../components/RecipeCard"
import meal1 from './img/1_meal.jpg';

export default function SavedRecipes(){

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
  },]

    return (
      <div>
        <title> Saved Recipes </title>
        {/*fonts*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
        {/*fonts*/}
        <link rel="stylesheet" href="./SavedRecipes.css" />
        <div className="my-recipes-title">
          <h1>My Saved Recipes</h1>
          <SearchBar description="Search my recipes"/>
          </div>
          <div className="my-recipes">
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
