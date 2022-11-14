import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
const types = ["Liquid", "Fruit", "Spice"];
const ingredientList = [
  { name: "tequila", isalcoholic: "true", type: "Liquid" },
  { name: "vodka", isalcoholic: "true", type: "Liquid" },
  { name: "banana", type: "Fruit" },
  { name: "mint", type: "Spice" },
];
const BarShelf = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [possibleRecipes, setPossibleRecipes] = useState(recipes);
  const [impossibleRecipes, setImpossibleRecipes] = useState(recipes);

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("http://localhost:7777/recipe", {
        method: "GET",
      });
      const Recipes = await response.json();
      setRecipes(Recipes);
    };
    fetchRecipes();
    const fetchIngredients = async () => {
      const response = await fetch("http://localhost:7777/ingredient", {
        method: "GET",
      });
      console.log(response.body);
      const Ingredients = await response.json();
      setIngredients(Ingredients);
      console.log(Ingredients);
    };
    fetchIngredients();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={5}>
        <Grid item id="ingredients">
          <h1>Ingredients</h1>
          <h3>Alcoholic</h3>
          <Button color="secondary" variant="outlined">
            Tequila
          </Button>
          <Button color="secondary" variant="outlined">
            Vodka
          </Button>

          <h3>Non-Alcoholic</h3>
        </Grid>
      </Grid>
      <Grid item xs={2}>
        <Grid item>
          <h2>Available recipes</h2>
          {recipes.map((recipe) => [
            <ListItem>
              <ListItemText primary={recipe.name} key={recipe._id} />
            </ListItem>,
          ])}
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid item>
          <h2>Impossible recipes</h2>
          {recipes.map((recipe) => [
            <ListItem>
              <ListItemText primary={recipe.name} key={recipe._id} />
            </ListItem>,
          ])}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BarShelf;
