import React, { useState, useEffect } from "react";
import { getURL } from "../tools";
import { useParams } from "react-router-dom";

const IndividualRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    //Fetch the recipe and its ingredients and instructions
    const fetchRecipe = async () => {
      const response = await getURL("/recipe/" + id);
      const Recipe = await response.json();
      setRecipe(Recipe);
    };

    fetchRecipe();
  }, [id]);

  return (
    <div style={styles.container}>
      <div style={styles.homeHeader1}>Make Your Drink And Taste</div>

      <div style={styles.individualRecipeContainer}>
        <div>
          <img style={styles.img}
            src={recipe.thumbnail}
            alt="No thumbnail :("
            width="450"
            height="450"
          />
        </div>
        <div>
          <div>
            <div style={styles.header1}>{recipe.name}</div>
            <div style={styles.header2}>{recipe.description}</div>
            <div style={styles.header3}>Ingredients</div>
            <div style={styles.ingreList}>
              {
                recipe.ingredient?.map((ingredient, index) =>
                  <div key={index} style={styles.ingre}>{ingredient}</div>)
              }
            </div>
          </div>
          <div>
            <div>Instructions</div>
            <div>
              {
                recipe.instruction?.replaceAll("/n", "\n")
                  .replaceAll("\\n", "\n")
                  .split("\n")
                  .map((line) => <p>{line}</p>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IndividualRecipe;

const styles = {
  container: {
    alignItem: 'center',
    width: '1920px',
    maxWidth: '95vw',
    padding: '0 2rem',
    margin: '0 auto',
  },
  homeHeader1: {
    fontSize: '2rem',
    margin: '2rem auto 2rem',
    //fontFamily: 'UltraBold',
  },
  individualRecipeContainer: {
    display: 'flex',
    margin: '0 16rem 2rem',
    justifyContent: 'center'
  },
  ingre: {},
  ingreList: {},
};
