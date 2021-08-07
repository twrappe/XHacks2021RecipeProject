import {React} from 'react';
import './SavedRecipes.css';
import meal1 from './img/1_meal.jpg';
import meal2 from './img/2_meal.png';
export default function SavedRecipes(){
    return (
      <div>
        <title> Saved Recipes </title>
        {/*fonts*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
        {/*fonts*/}
        <link rel="stylesheet" href="SavedRecipes.css" />
        <div className="wrapper">
          <div className="recipeimg">
            <ul>
              <li>
                <img src={meal1} width={100} height={100} alt="" /></li>
              <li>
                <img src={meal2} width={100} height={100} alt="" /></li>
              <li />
              <li />
            </ul>
          </div>
        </div>
      </div>
    )
}
