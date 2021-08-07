import {React} from 'react';
import './HomePage.css';
export default function HomePage(){
    return(
      <div>
        <title> Homepage </title>
        {/*fonts*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
        {/*fonts*/}
        <link rel="stylesheet" href="./HomePage.css" />
        <div className="wrapper">
          <div className="center-text">
            <h1>App Name</h1>
            <h2><em>Creating the best food, the best way.</em></h2>
            <br />
            <br />
            <h3> What are you cooking today?</h3>
            <div className="searchwrap">
              <input type="search" name="search" placeholder="Search recipe name or insert URL" />
            </div>
          </div>
        </div></div>
      )
}
