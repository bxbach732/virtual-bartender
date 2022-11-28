import React, { useState, useEffect } from "react";
import { getURL, putURL } from "../tools";
import { useNavigate } from "react-router-dom";
import { IngredientList } from "./components/IngredientList";
import { RecipeList } from "./components/RecipeList";
import { useCallback } from "react";

const BarShelf = () => {
  const [ingredients, setIngredients] = useState([]);
  const [shelf, setShelf] = useState({ _id: "", content: [] });
  const [possibleRecipes, setPossibleRecipes] = useState();
  const [impossibleRecipes, setImpossibleRecipes] = useState();
  const navigate = useNavigate();

  const fetchPossibleRecipes = useCallback(async () => {
    //Get possible recipes with the current shelf
    const response = await getURL("/shelf/" + shelf._id + "/possible-recipe");
    const PossibleRecipes = await response.json();
    setPossibleRecipes(PossibleRecipes["Possible recipes"]);
    setImpossibleRecipes(PossibleRecipes["Impossible recipes"]);
  }, [shelf]);

  useEffect(() => {
    //Get the user from localstorage
    const user = window.localStorage.getItem("user");
    //If no user, return to login
    if (!user) navigate("/login");
    const fetchBarshelf = async () => {
      //Fetch the shelf of the user
      const response = await getURL("/user/" + user + "/shelf");
      const Shelf = await response.json();
      setShelf(Shelf);
      //Fetch the ingredients
      const ingredientResponse = await getURL("/ingredient");
      const Ingredients = await ingredientResponse.json();
      //Sort the ingredients according to their types.
      const ingredientTypes = Ingredients.reduce((types, item) => {
        const type = types[item.type] || [];
        type.push(item);
        types[item.type] = type;
        return types;
      }, {});
      setIngredients(ingredientTypes);
    };
    fetchBarshelf();
  }, [navigate]);

  //Every time the shelf updates, call fetchPossibleRecipes
  useEffect(() => {
    fetchPossibleRecipes();
  }, [shelf, fetchPossibleRecipes]);

  //Update the shelf on clicking any ingredient
  async function ingredientOnclick(id) {
    let shelfData = {};
    //If it's already on the shelf, remove it
    if (shelf.content.includes(id)) {
      const response = await putURL("/shelf/" + shelf._id + "/delete/" + id);
      shelfData = await response.json();
      //If it isn't, add it
    } else {
      const response = await putURL("/shelf/" + shelf._id + "/add/" + id);
      shelfData = await response.json();
    }
    //Update shelf
    setShelf(shelfData);
  }

  return (
    <div>
      <div style={styles.barShelfHeader}>
        Have you found your favourite yet?
      </div>
      <div style={styles.box}>
        <IngredientList
          ingredients={ingredients}
          shelf={shelf}
          ingredientOnclick={ingredientOnclick}
        />

        <div style={styles.barShelfRecipeList}>
          <RecipeList
            text1={"AVAILABLE RECIPES"}
            text2={"with your ingredients"}
            recipes={possibleRecipes}
          />
          <RecipeList
            text1={"CANNOT MAKE"}
            text2={":("}
            recipes={impossibleRecipes}
          />
        </div>
      </div>
    </div>
  );
};

export default BarShelf;
const styles = {
  barShelfHeader: {
    fontSize: "3rem",
    margin: "3rem auto 3rem",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    columnGap: "100px",
    marginBottom: "100px",
  },
  barShelfRecipeList: {
    display: "flex",
    justifyContent: "center",
    columnGap: "50px",
  },
};
