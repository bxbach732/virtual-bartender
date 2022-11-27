import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const RecipeList = ({ text1, text2, recipes }) => {
  const [showMore, setShowMore] = useState(false);

  return <div style={styles.recipeList}>
    <div>
      <div>{text1}</div>
      <div>{text2}</div>
    </div>
    <div>
      <h3>Alcoholic</h3>
      {recipes?.Alcoholic?.filter((_, i) => showMore || i < 10).map((recipe) =>
          <div key={recipe.id}>
            <Link to={"/recipes/" + recipe.id}>
              <div>{recipe.name}</div>
            </Link>
          </div>,
        )}
      <h3>Non-Alcoholic</h3>
      {recipes && recipes["Non-Alcoholic"]?.filter((_, i) => showMore || i < 10).map((recipe) => (
          <div key={recipe.id}>
            <Link to={"/recipes/" + recipe.id}>
              {recipe.name}
            </Link>
          </div>))
      }
    </div>
    <Button style={styles.showMoreButton}
      onClick={() => setShowMore(!showMore)}
      variant="contained"
      color="secondary">
      {!showMore ? "Show More" : "Show Less"}
    </Button>
  </div >
}

const styles = {
  recipeList: {
    width: '250px',
    //border: 'black 8px solid',
    background: '#c8baa8',
    paddingRight: '20px',
    textAlign: 'center',
    height: 'fit-content',
    minHeight: '625px',
  },
  showMoreButton: {
    margin: '2rem auto 2rem',
  },
}

