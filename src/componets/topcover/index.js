import React from "react";
import { useState, useContext } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { MYContext } from "../../context";

import "./topcover.css";

function TopCover() {
  const [searchInput, setSearchInput] = useState("");
  const { setRecipes } = useContext(MYContext);

  const handleSearch = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data.meals))
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="topcover">
      <h1>Welcome</h1>
      <h2>You can search your favourite Recipes</h2>
      <div className="btn-input">
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search for recipies"
            aria-label="recipe search input"
            aria-describedby="recipe-search-button"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <Button
            variant="danger"
            id="recipe-search-button"
            onClick={handleSearch}
          >
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default TopCover;
