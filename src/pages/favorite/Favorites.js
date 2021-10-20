import React, { useContext, useEffect, useState } from "react";
import { MYContext } from "../../context";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import RecipeCard from "../../componets/recipecard";

function Favorites() {
  const { user } = useContext(MYContext);
  const [favorite, setFavourite] = useState([]);
  useEffect(() => {
    if (user.favorite.length) {
      const requests = user.favorite.map((favorite) =>
        fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${favorite}`
        ).then((res) => res.json())
      );
      Promise.all(requests).then((res) => setFavourite(res));
    }
  }, [user]);
  if (!user.favorite.length) {
    return (
      <div>
        <h3>You don't have any Favorite recipies yet</h3>
        <LinkContainer to="/">
          <Button variant="danger">Please add favorite Recipies</Button>
        </LinkContainer>
      </div>
    );
  }
  return (
    <div>
      <h3>Your Favorite Recipies</h3>
      <div className="recipe-container">
        {favorite.map(({ meals: r }) => (
          <div key={r[0].idMeal}>
            {" "}
            <RecipeCard {...r[0]} />
          </div>
        ))}
        <LinkContainer to="/">
          <Button variant="danger">Please add favorite Recipies</Button>
        </LinkContainer>
      </div>
    </div>
  );
}

export default Favorites;
