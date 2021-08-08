import {React, useEffect} from 'react';
import "./EditRecipe.css";
import Done from "@material-ui/icons/Done";
import Quill from "quill";
import 'quill/dist/quill.snow.css';

function EditRecipe() {
    useEffect(() => {
        new Quill("#edit-ingredients", { theme: "snow" })
        new Quill("#edit-instructions", { theme: "snow" })
    }, [])
    const exampleRecipe = {
        name: "No Bake Cheesecake",
        image: 'https://asset.kompas.com/crops/fdmJOqFjziFBVEBiwwl3jzbrXzQ=/4x0:1000x664/750x500/data/photo/2020/08/24/5f43475eb10af.jpg',
        defaultServing: 12,
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

    return (
        <div className="recipe-page">
            <link rel="stylesheet" href="./EditRecipe.css" />
            <div className="recipe-header">
                <img alt={exampleRecipe.name} src={exampleRecipe.image}/>
                <div className="recipe-title">
                    <h1>{exampleRecipe.name}</h1>
                    <Done fontSize = "large"/>
                </div>
            </div>
            <div className="recipe-content">
                <div>
                        <p>servings shown for: {exampleRecipe.defaultServing}</p>
                </div>
                <div className="ingredients">
                        <h4>Ingredients</h4>
                        <div id="edit-ingredients"></div>
                </div>
                <div className="instructions">
                    <h4>Instructions</h4>
                    <div id="edit-instructions"></div>
                </div>
            </div>
        </div>
    )
}

export default EditRecipe;