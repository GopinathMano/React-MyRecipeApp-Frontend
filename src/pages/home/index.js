import { useEffect, useContext } from "react";
import TopCover from "../../componets/topcover";
import RecipeContainer from "../../componets/recipecontainer";
import { MYContext } from "../../context";
import "./style.css";

function Home() {
  const { recipes, setRecipes } = useContext(MYContext);
  const { user } = useContext(MYContext);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
      .then((res) => res.json())
      .then((data) => setRecipes(data.meals))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {!user && (
        <div className="cover">
          <h1>Welcome to My Recipe</h1> 
          <h1>_____________________________________________</h1>
          <h2>Please login for your Recipes 🍨</h2>
        </div>
      )}
      {user && <TopCover />}
      {user && <RecipeContainer recipes={recipes} />}
    </>
  );
}

export default Home;
