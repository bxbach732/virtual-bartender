import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { f, getURL } from "../tools";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
const IndividualRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [shelf, setShelf] = useState({});

  useEffect(() => {
    console.log(id);
    const fetchRecipe = async () => {
      const response = await getURL("recipe/" + id);
      const Recipe = await response.json();
      setRecipe(Recipe);
      console.log(Recipe.ingredient);
    };

    fetchRecipe();
  }, [id]);

  function replaceWithBr(s) {
    if (typeof s === "string") {
      return s.replace(/\n/g, "<br />")
    } else return s;

  }

  return (
    <Box>
      <h1>{recipe.name}</h1>
      <h3>{recipe.description}</h3>
      <h3>Ingredients</h3>
      {recipe.ingredient &&
        recipe.ingredient.map((ingredient, index) => [
          <ListItem key={index}>
            <p key={index}>{ingredient}</p>
          </ListItem>,
        ])}
      <h3>Instructions</h3>
      <p dangerouslySetInnerHTML={{ __html: replaceWithBr() }} />
    </Box>
  );
};
export default IndividualRecipe;


