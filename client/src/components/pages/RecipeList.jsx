import React, { useState, useEffect } from "react";
const RecipeList = () => {
  const [recipes, setRecipes] = useState({});

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("http://localhost:7777/recipe", {
        method: "GET",
      });
      const Recipes = await response.json();
      setRecipes(Recipes);
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
    </div>
  );
};

export default RecipeList;
