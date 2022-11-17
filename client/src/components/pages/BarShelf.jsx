import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { getURL } from "../tools";
import { useAuth } from "../useAuth";

const BarShelf = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [possibleRecipes, setPossibleRecipes] = useState(recipes);
  const [impossibleRecipes, setImpossibleRecipes] = useState(recipes);
  const ingredientTypes = [
    "Alcohol",
    "Beer",
    "Juice",
    "Soft drink",
    "Misc",
    "Fruit",
    "Water",
  ];
  const auth = useAuth();

  useEffect(() => {
    console.log(auth.user);
    createUser();
    const fetchRecipes = async () => {
      const response = await getURL("recipe");
      //const response = await getURL("recipe");
      const Recipes = await response.json();
      setRecipes(Recipes);
    };
    fetchRecipes();
    const fetchIngredients = async () => {
      const response = await getURL("ingredient");
      const Ingredients = await response.json();
      setIngredients(Ingredients);
    };
    fetchIngredients();
  }, []);

  async function createUser() {
    let userID = localStorage.getItem("userID");
    if (!userID) {
      userID = "63434c64bc9c8709c0d64628";
      localStorage.setItem("userID", userID);
    }
    const response = await getURL("shelf/" + userID);
    const Shelf = await response.json();
    console.log(Shelf);
  }

  function ingredientOnclick(id) {
    console.log(id);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <h1>Ingredients</h1>
        <Grid item id="ingredients">
          {ingredients.map((ingredient) => [
            <ListItem key={ingredient._id}>
              <Button
                onClick={() => {
                  ingredientOnclick(ingredient._id);
                }}
                color="secondary"
                variant="outlined"
              >
                {ingredient.name}
              </Button>
            </ListItem>,
          ])}
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Grid item>
          <h2>Available recipes</h2>
          {recipes.map((recipe) => [
            <ListItem key={recipe._id}>
              <ListItemText primary={recipe.name} />
            </ListItem>,
          ])}
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid item>
          <h2>Impossible recipes</h2>
          {recipes.map((recipe) => [
            <ListItem key={recipe._id}>
              <ListItemText primary={recipe.name} />
            </ListItem>,
          ])}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BarShelf;
