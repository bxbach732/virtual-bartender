import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

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
      <Box>
        <List>
          {recipes.map((recipe) => [
            <ListItem key={recipe._id}>
              <ListItemText
                primary={recipe.name}
                secondary={recipe.description}
              />
            </ListItem>,
          ])}
        </List>
      </Box>
    </div>
  );
};

export default RecipeList;
