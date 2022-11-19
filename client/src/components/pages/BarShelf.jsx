import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { getURL, postURL, putURL } from "../tools";
import { useAuth } from "../useAuth";
import { useNavigate } from "react-router-dom";

const BarShelf = () => {
  const [ingredients, setIngredients] = useState([]);
  const [shelf, setShelf] = useState({ content: [] });
  const [shelfID, setShelfID] = useState();

  const [possibleRecipes, setPossibleRecipes] = useState();
  const [impossibleRecipes, setImpossibleRecipes] = useState();
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
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.user) {
      navigate("/sign");
    }
    const fetchShelfID = async () => {
      const idResponse = await getURL("user/" + auth.user._id + "/shelf");
      const Shelf = await idResponse.json();
      setShelfID(Shelf._id);
    };
    fetchShelfID();
    fetchShelf();

    const fetchIngredients = async () => {
      const response = await getURL("ingredient");
      const Ingredients = await response.json();
      setIngredients(Ingredients);
    };
    fetchIngredients();
    fetchPossibleRecipes();
  }, []);

  async function fetchShelf() {
    if (shelfID) {
      const response = await getURL("shelf/" + shelfID);
      const shelfData = await response.json();
      setShelf(shelfData);
      console.log(shelf);
    }
  }

  async function ingredientOnclick(id) {
    let shelfData = {};
    if (shelf.content.includes(id)) {
      const response = await putURL("shelf/" + shelfID + "/delete/" + id);
      shelfData = await response.json();
    } else {
      const response = await putURL("shelf/" + shelfID + "/add/" + id);
      shelfData = await response.json();
    }
    setShelf(shelfData);
    fetchPossibleRecipes();
  }

  async function fetchPossibleRecipes() {
    console.log("shelf/" + shelfID + "/possible-recipe");
    const response = await getURL("shelf/" + shelfID + "/possible-recipe");
    const PossibleRecipes = await response.json();
    setPossibleRecipes(PossibleRecipes["Possible recipes"]);
    setImpossibleRecipes(PossibleRecipes["Impossible recipes"]);
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
                style={
                  shelf.content.includes(ingredient._id)
                    ? { color: "white", backgroundColor: "#493725" }
                    : { borderColor: "black" }
                }
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
          <h3>Alcoholic</h3>
          {possibleRecipes &&
            possibleRecipes.Alcoholic.map((recipe) => [
              <ListItem key={recipe.id}>
                <ListItemText key={recipe.id} primary={recipe.name} />
              </ListItem>,
            ])}
          <h3>Non-Alcoholic</h3>
          {possibleRecipes &&
            possibleRecipes["Non-Alcoholic"].map((recipe) => [
              <ListItem key={recipe.id}>
                <ListItemText key={recipe.id} primary={recipe.name} />
              </ListItem>,
            ])}
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid item>
          <h2>Impossible recipes</h2>
          <h3>Alcoholic</h3>
          {impossibleRecipes &&
            impossibleRecipes.Alcoholic.map((recipe) => [
              <ListItem key={recipe.id}>
                <ListItemText key={recipe.id} primary={recipe.name} />
              </ListItem>,
            ])}
          <h3>Non-Alcoholic</h3>
          {impossibleRecipes &&
            impossibleRecipes["Non-Alcoholic"].map((recipe) => [
              <ListItem key={recipe.id}>
                <ListItemText key={recipe.id} primary={recipe.name} />
              </ListItem>,
            ])}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BarShelf;
