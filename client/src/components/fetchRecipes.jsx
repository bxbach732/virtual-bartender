import React, { useState, useEffect } from "react";
const RecipeList = () => {
  const [recipes, setRecipes] = useState({});

  useEffect(async () => {
    const response = await fetch("/recipe", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setRecipes(await response.json());
  });

  return (
    <div>
      <h1>Recipes</h1>
    </div>
  );
};

export default RecipeList;
