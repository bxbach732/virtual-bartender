import React, { useState, useEffect } from "react";
import { getURL } from "../tools";
import { useParams } from "react-router-dom";

// render the individual instruction page for each drink (https://virtual-bartender1.herokuapp.com/#/recipes/{id})
const IndividualRecipe = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    // fetch the recipe and its ingredients and instructions
    const fetchRecipe = async () => {
      const response = await getURL("/recipe/" + id);
      const Recipe = await response.json();
      setRecipe(Recipe);
    };

    fetchRecipe();
  }, [id]);

  return (
    <div style={styles.container}>
      <div style={styles.header1}>Make Your Drink And Taste</div>
      <div style={styles.header2}><b>{recipe.name?.toUpperCase()}</b></div>
      <div style={styles.body}>
        <div style={styles.bodyContent1}>
          <img style={styles.img}
            src={recipe.thumbnail}
            alt="No thumbnail :("
            width="300"
            height="300"
          />
          &nbsp;
          <div style={styles.description}>{recipe.description}</div>
        </div>
        <div style={styles.bodyContent2}>
          <div style={styles.ingredientText}>
            <div><b>Ingredients</b></div>
            <div>
              {
                recipe.ingredient?.map((ingredient, index) =>
                  <div key={index}>{ingredient}</div>)
              }
            </div>
          </div>
          &nbsp;
          <div style={styles.instructionText}>
            <div><b>How to make</b></div>
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
  header1: {
    fontSize: '2rem',
    margin: '2rem auto 2rem',
    //fontFamily: 'UltraBold',
  },
  header2: {
    fontSize: '1.75rem',
    margin: '2rem auto 1rem',
    fontFamily: 'Light'
  },
  body: {
    display: 'flex',
    margin: '0 16rem 2rem',
    justifyContent: 'center',
    columnGap: '50px',
    marginBottom: '4rem'
  },
  bodyContent1: {
    width: '350px',
    textAlign: 'center',
  },
  description: {
    margin: '0.5rem 0 1rem'
  },
  bodyContent2: {
    marginBottom: '4rem'
  },
  ingredientText: {
    textAlign: 'center'
  },
  instructionText: {
    width: '400px',
    textAlign: 'left',
  },
};
