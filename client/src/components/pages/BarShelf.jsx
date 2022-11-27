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
    const response = await getURL("/shelf/" + shelf._id + "/possible-recipe");
    const PossibleRecipes = await response.json();
    setPossibleRecipes(PossibleRecipes["Possible recipes"]);
    setImpossibleRecipes(PossibleRecipes["Impossible recipes"]);
  }, [shelf])

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (!user) navigate("/login");
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
  }, [navigate]);
  useEffect(() => {
    fetchPossibleRecipes();
  }, [shelf, fetchPossibleRecipes]);

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

  return (
    <div>
      <div style={styles.barShelfHeader}>
        Have you found your favourite yet?
      </div>
      <div style={styles.box}>
        <IngredientList ingredients={ingredients} shelf={shelf} ingredientOnclick={ingredientOnclick} />

        <div style={styles.barShelfRecipeList}>
          <RecipeList text1={"AVAILABLE RECIPES"} text2={"with your ingredients"} recipes={possibleRecipes} />
          <RecipeList text1={"CANNOT MAKE"} text2={":("} recipes={impossibleRecipes} />
        </div>
      </div>
    </div>
  );
};

export default BarShelf;
const styles = {
  barShelfHeader: {
    fontSize: '3rem',
    margin: '3rem auto 3rem',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    columnGap: '100px',
    marginBottom: '100px'
  },
  barShelfRecipeList: {
    display: 'flex',
    justifyContent: 'center',
    columnGap: '50px',
  },
}