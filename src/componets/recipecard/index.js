import React from "react";
import { Card } from "react-bootstrap";
import RecipeModal from "../recipemodal";
import "./recipecard.css";

function RecipeCard({
  strMeal,
  strMealThumb,
  strInstructions,
  idMeal,
  strYoutube,
  strCategory
}) {
  return (
    <div className="top-margin">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <RecipeModal
            title={strMeal}
            instruction={strInstructions}
            youtube={strYoutube}
            recipeId={idMeal}
            category ={strCategory}
          />
         
          
        </Card.Body>
      </Card>
    </div>
  );
}

export default RecipeCard;
