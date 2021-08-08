import React from 'react';
import "./RecipePage.css";
import TurnedIn from "@material-ui/icons/TurnedIn";
import Edit from "@material-ui/icons/Edit";

function RecipePage({visibility = 'public'}) {
    const exampleRecipe = {
        name: "No Bake Cheesecake",
        image: 'https://asset.kompas.com/crops/fdmJOqFjziFBVEBiwwl3jzbrXzQ=/4x0:1000x664/750x500/data/photo/2020/08/24/5f43475eb10af.jpg',
        defaultServing: 12,
        customServing: 12,
        ingredients: [
            {
                type: "butter",
                amount: 0.5,
                measurement: "cup"
            }, {
                type: "graham cracker crumbs",
                amount: 1.5,
                measurement: "cup",
            }, {
                type: "granulated sugar",
                amount: 0.25,
                measurement: "cup"
            }, {
                type: "kosher salt",
                amount: 0.5,
                measurement: "tsp"
            }, {
                type:"heavy whipping cream",
                amount: 2,
                measurement: "cup"
                
            }, {
                type: "cream cheese",
                amount: 8,
                measurement: "ounce"
            }, {
                type: "powdered sugar",
                amount: 1,
                measurement: "cup"
            }, {
                type: "vanilla extract",
                amount: 2,
                measurement: "tsp"
            }
        ],
        instructions: [
            "For the crust, Lightly coat a 9- inch springform pan with nonstick spray. Set aside.",
            "In a large bowl evenly combine the butter, graham cracker crumbs, sugar, and salt.",
            "Press the mixture firmly into the bottom and up the sides of the prepared pan.",
            "Place in the freezer while you prepare the filling.",
            "In the bowl of your stand mixer fitted with the whisk attachment, beat the heavy " +
            "cream on medium-high speed until stiff peaks form.  Remove the whipped cream from the mixing bowl and set aside.",
            "In the same mixing bowl, replace the whisk attachment with the paddle attachment. Mix the cream cheese, powdered " + 
            "sugar, and vanilla extract together on medium speed for 2 minutes, or until smooth and creamy, scraping the sides of the bowl as needed.",
            "Remove the bowl from the mixer and using a rubber spatula, fold in the whipped cream evenly, making sure to scrape " + 
            "the sides and bottom of the bowl completely.",
            "Spread the cheesecake filling into the chilled crust and smooth with an off-set spatula.",
            "Cover and chill for 4 hours or overnight."
        ]
    }

    const numServings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 35, 37, 38, 39, 40]

    return (
        <div className="recipe-page">
            <link rel="stylesheet" href="./RecipePage.css" />
            <div className="recipe-header">
                <img alt={exampleRecipe.name} src={exampleRecipe.image}/>
                <div className="recipe-title">
                    <h1>{exampleRecipe.name}</h1>
                    {visibility === 'public' ? <TurnedIn fontSize="large"/> : <Edit fontSize="large"/>}
                </div>
            </div>
            <div className="recipe-content">
                <div >
                        <p>servings shown for {exampleRecipe.defaultServing} portions</p>
                </div>
                <div className="ingredients">
                        <h4>Ingredients</h4>
                        <ul>
                        {exampleRecipe.ingredients.map((ing) => {
                            return (
                                <li>
                                    <p>{ing.amount} {ing.measurement} of {ing.type}</p>
                                </li>
                            )
                        })}
                        </ul>
                </div>
                <div className="instructions">
                    <h4>Instructions</h4>
                    <ol>
                        {exampleRecipe.instructions.map((ins) => {
                            return (
                                <li>
                                    <p>{ins}</p>
                                </li>
                            )
                        })}
                        </ol>
                </div>
            </div>
        </div>
    )
}

export default RecipePage;