import {React} from 'react';
import './SavedRecipes.css';
import SearchBar from '../../components/SearchBar';
import RecipeCard from "../../components/RecipeCard";
import meal1 from '../img/1_meal.jpg';

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
