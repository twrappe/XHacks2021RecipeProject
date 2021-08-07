import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from "./views/HomePage/HomePage.js";
import SavedRecipes from "./views/SavedRecipes";
import {Navbar} from 'react-bootstrap';

export default function App() {
  return (
    <Router>
    <div>
    <Navbar>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/saved">Saved Recipes</Link></li>
      </ul>
    </Navbar>
      <div>
        <Switch>
         <Route exact path="/">
            <HomePage/>
         </Route>
          <Route path="/saved">
            <SavedRecipes/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}
