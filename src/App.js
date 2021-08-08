import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import SavedRecipes from "./views//SavedRecipes/SavedRecipes";
import EditRecipe from "./views/EditRecipe/EditRecipe";
import RecipePage from "./views/RecipePage/RecipePage";
import {Navbar} from 'react-bootstrap';

export default function App() {
  return (
    <Router>
    <div>
    <Navbar>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/saved">My Recipes</Link></li>
      </ul>
    </Navbar>
      <div>
        <Switch>
         <Route exact path="/">
            <HomePage />
         </Route>
          <Route path="/saved">
            <SavedRecipes />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}
