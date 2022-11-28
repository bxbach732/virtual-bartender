import React, { useState, useEffect } from "react";
import { getURL } from "../tools";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

const IndividualRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    //Fetch the recipe and its ingredients and instructions
    const fetchRecipe = async () => {
      const response = await getURL("/recipe/" + id);
      const Recipe = await response.json();
      setRecipe(Recipe);
    };

    fetchRecipe();
  }, [id]);

  return (
    <div>
      <h1>{recipe.name}</h1>
      <h3>{recipe.description}</h3>
      <h3>Ingredients</h3>
      <div style={styles.ingreList}>
        {recipe.ingredient?.map((ingredient, index) => (
          <div key={index} style={styles.ingre}>
            {ingredient}
          </div>
        ))}
      </div>

      <h3>Instructions</h3>
      {recipe.instruction
        ?.replaceAll("/n", "\n")
        .replaceAll("\\n", "\n")
        .split("\n")
        .map((line) => (
          <p>{line}</p>
        ))}
      <div className="img">
        <img
          src={recipe.thumbnail}
          alt="No thumbnail :("
          width="450"
          height="450"
        />
      </div>
    </div>
  );
};
export default IndividualRecipe;

const styles = {
  ingre: {},
  ingreList: {},
};
