import {useState} from 'react';
import './HomePage.css';
import Search from "../../components/Search"
import RecipeCard from "../../components/RecipeCard"
import meal1 from '../img/1_meal.jpg';

export default function HomePage() {
const posts = [{
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
const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }

  return posts.filter((post) => {
      const postName = post.name.toLowerCase();
      return postName.includes(query);
  });
};
  const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(posts, searchQuery);
  return(
      <div>
        {/*fonts*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet" />
        {/*fonts*/}
        <link rel="stylesheet" href="./HomePage.css" />
        <div className="wrapper">
          <div className="title">
            <h1>App</h1>
            <h2><em>Creating the best food, the best way.</em></h2>
          </div>
            <div>
              <h3> What are you cooking today?</h3>
              <Search searchQuery={searchQuery}
                setSearchQuery={setSearchQuery} />
                <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.name}</li>
                ))}
            </ul>
            </div>
        </div>
        <div className="diets">
          <h3 className= "suggestion">Suggested recipes:</h3>
          {posts.map((recipe, i) => {
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
