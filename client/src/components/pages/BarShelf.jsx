import React, { useState, useEffect } from "react";
import { getURL, putURL } from "../tools";
import { useNavigate } from "react-router-dom";
import { IngredientList } from "../IngredientList";
import { RecipeList } from "../RecipeList";
import { useCallback } from "react";

// render Barshelf page (https://virtual-bartender1.herokuapp.com/#/barshelf)
const BarShelf = () => {
  // list of ingredients
  const [ingredients, setIngredients] = useState([]);

  // user's shelf
  const [shelf, setShelf] = useState({ _id: "", content: [] });

  // possible and impossible recipes
  const [possibleRecipes, setPossibleRecipes] = useState();
  const [impossibleRecipes, setImpossibleRecipes] = useState();

  // use to navigate to other pages
  const navigate = useNavigate();

  const fetchPossibleRecipes = useCallback(async () => {
    // get possible recipes with the current shelf
    const response = await getURL("/shelf/" + shelf._id + "/possible-recipe");
    const PossibleRecipes = await response.json();
    setPossibleRecipes(PossibleRecipes["Possible recipes"]);
    setImpossibleRecipes(PossibleRecipes["Impossible recipes"]);
  }, [shelf]);

  useEffect(() => {
    // get the user from localstorage
    const user = window.localStorage.getItem("user");
    // if no user, return to login
    if (!user) navigate("/login");
    const fetchBarshelf = async () => {
      // fetch the shelf of the user
      const response = await getURL("/user/" + user + "/shelf");
      const Shelf = await response.json();
      setShelf(Shelf);
      // fetch the ingredients
      const ingredientResponse = await getURL("/ingredient");
      const Ingredients = await ingredientResponse.json();
      // sort the ingredients according to their types.
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

  // every time the shelf updates, call fetchPossibleRecipes
  useEffect(() => {
    fetchPossibleRecipes();
  }, [shelf, fetchPossibleRecipes]);

  // update the shelf on clicking any ingredient
  async function ingredientOnclick(id) {
    let shelfData = {};
    // if it's already on the shelf, remove it
    if (shelf.content.includes(id)) {
      const response = await putURL("/shelf/" + shelf._id + "/delete/" + id);
      shelfData = await response.json();
      // if it isn't, add it
    } else {
      const response = await putURL("/shelf/" + shelf._id + "/add/" + id);
      shelfData = await response.json();
    }
    // update shelf
    setShelf(shelfData);
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        Have you found your favourite yet?
      </div>
      <div style={styles.body}>
        <IngredientList
          ingredients={ingredients}
          shelf={shelf}
          ingredientOnclick={ingredientOnclick}
        />
        <div style={styles.recipeList}>
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
  container: {
    alignItem: 'center',
    width: '1920px',
    maxWidth: '95vw',
    padding: '0 2rem',
    margin: '0 auto',
  },
  header: {
    fontSize: '2rem',
    margin: '2rem auto 2rem',
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    columnGap: '100px',
    marginBottom: '100px',
    marginLeft: '30px',
  },
  recipeList: {
    display: 'flex',
    justifyContent: 'center',
    columnGap: '50px',
  },
};
