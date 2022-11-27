import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { getURL, postURL, putURL } from "../tools";
import { useAuth } from "../useAuth";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";

const BarShelf = () => {
  const [ingredients, setIngredients] = useState([]);
  const [shelf, setShelf] = useState({ _id: "", content: [] });

  const [possibleRecipes, setPossibleRecipes] = useState();
  const [impossibleRecipes, setImpossibleRecipes] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
    const fetchBarshelf = async () => {
      const idResponse = await getURL("/user/" + user + "/shelf");
      const Shelf = await idResponse.json();
      setShelf(Shelf);
      const ingredientResponse = await getURL("/ingredient");
      const Ingredients = await ingredientResponse.json();
      const ingredientTypes = Ingredients.reduce((types, item) => {
        const type = types[item.type] || [];
        type.push(item);
        types[item.type] = type;
        return types;
      }, {});
      setIngredients(ingredientTypes);
    };
    fetchBarshelf();
  }, []);
  useEffect(() => {
    fetchPossibleRecipes();
  }, [shelf]);

  async function ingredientOnclick(id) {
    let shelfData = {};
    if (shelf.content.includes(id)) {
      const response = await putURL("/shelf/" + shelf._id + "/delete/" + id);
      shelfData = await response.json();
    } else {
      const response = await putURL("/shelf/" + shelf._id + "/add/" + id);
      shelfData = await response.json();
    }
    setShelf(shelfData);
    fetchPossibleRecipes();
  }

  async function fetchPossibleRecipes() {
    const response = await getURL("/shelf/" + shelf._id + "/possible-recipe");
    const PossibleRecipes = await response.json();
    setPossibleRecipes(PossibleRecipes["Possible recipes"]);
    setImpossibleRecipes(PossibleRecipes["Impossible recipes"]);
  }

  return (
    <div>
      <div>
        <h1>Ingredients</h1>
        <div item id="ingredients">
          {Object.keys(ingredients).map(function (key, index) {
            return (
              <ul key={index}>
                <h3>{key}</h3>
                {ingredients[key].map((ingredient) => {
                  return (
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
                    </ListItem>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </div>
      <div>
        <div>
          <h2>Available recipes</h2>
          <h3>Alcoholic</h3>
          {possibleRecipes &&
            possibleRecipes.Alcoholic.map((recipe) => [
              <ListItem key={recipe.id}>
                <Link to={"/recipes/" + recipe.id}>
                  <ListItemText key={recipe.id} primary={recipe.name} />
                </Link>
              </ListItem>,
            ])}
          <h3>Non-Alcoholic</h3>
          {possibleRecipes &&
            possibleRecipes["Non-Alcoholic"].map((recipe) => [
              <ListItem key={recipe.id}>
                <Link to={"/recipes/" + recipe.id}>
                  <ListItemText key={recipe.id} primary={recipe.name} />
                </Link>
              </ListItem>,
            ])}
        </div>
      </div>
      <div>
        <div>
          <h2>Impossible recipes</h2>
          <h3>Alcoholic</h3>
          {impossibleRecipes &&
            impossibleRecipes.Alcoholic.map((recipe) => [
              
              <ListItem key={recipe.id}>
                <Link to={"/recipes/" + recipe.id}>
                  <ListItemText
                    key={recipe.id}
                    primary={recipe.name}
                    secondary={recipe.missing.map((item) => item).join(", ")}
                  />
                </Link>
              </ListItem>,
            ])}
          <h3>Non-Alcoholic</h3>
          {impossibleRecipes &&
            impossibleRecipes["Non-Alcoholic"].map((recipe) => [
              <ListItem key={recipe.id}>
                <Link to={"/recipes/" + recipe.id}>
                  <ListItemText
                    key={recipe.id}
                    primary={recipe.name}
                    secondary={recipe.missing.map((item) => item).join(", ")}
                  />
                </Link>
              </ListItem>,
            ])}
        </div>
      </div>
    </div>
  );
};

export default BarShelf;
