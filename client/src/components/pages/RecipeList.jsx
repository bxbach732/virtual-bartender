import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { getURL } from "../tools";
const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await getURL("recipe");
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
              <img
                src={recipe.thumbnail}
                alt="No thumbnail :("
                width="100"
                height="100"
              />
              <Link to={"/recipes/" + recipe._id}>
                <ListItemText
                  primary={recipe.name}
                  secondary={recipe.description}
                />
              </Link>
            </ListItem>,
          ])}
        </List>
      </Box>
    </div>
  );
};

export default RecipeList;
