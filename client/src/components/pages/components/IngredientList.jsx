import { Button } from "@mui/material";
import React, { useState } from "react";

export const IngredientList = ({ ingredients, shelf, ingredientOnclick, }) => {
  const [showMore, setShowMore] = useState(false);

  return <div style={styles.ingredientList}>
    <div style={styles.ingredientListContainer}>
      <div style={styles.ingredientListHeader}>
        YOUR BARSHELF<br></br>
        Add your ingredients here
      </div>
      <div>
        <img
          src="/images/Barshelf-1.jpg"
          alt="Home"
          width="100"
          height="100"
        />
      </div>
    </div>
    <div>
      {Object.keys(ingredients).filter((_, i) => showMore || i < 3).map(function (key, index) {
        return (
          <ul key={index}>
            <h3>{key}</h3>
            <div style={styles.ingredients}>
              {ingredients[key].map((ingredient) => {
                return (
                  <div key={ingredient._id}>
                    <Button
                      onClick={() => {
                        ingredientOnclick(ingredient._id);
                      }}
                      style={{
                        ...styles.ingredientButton,
                        ...shelf.content.includes(ingredient._id)
                          ? { color: "white", backgroundColor: "#493725" }
                          : { borderColor: "black" }
                      }}
                      color="secondary"
                      variant="outlined"
                    >
                      {ingredient.name}
                    </Button>
                  </div>
                );
              })}
            </div>
          </ul>
        );
      })}
    </div>
    <Button style={styles.showMoreButton}
      onClick={() => setShowMore(!showMore)}
      variant="contained"
      color="secondary">
      {!showMore ? "Show More" : "Show Less"}
    </Button>
  </div>
}

const styles = {
  ingredientList: {
    width: '600px',
    border: 'black 8px solid',
    paddingRight: '20px',
    textAlign: 'left',
    height: 'fit-content'
  },
  ingredientListContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: '1rem auto',
    justifyContent: 'center',
    columnGap: '16px',
  },
  ingredientListHeader: {
    fontSize: '1.75rem',
    fontFamily: 'Light',
    textAlign: 'center'
  },
  ingredients: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    flexWrap: 'wrap',
    columnGap: '16px',
    rowGap: '16px'
  },
  ingredientButton: {
    borderRadius: '20px'
  },
  showMoreButton: {
    margin: '2rem auto 2rem',
    display: 'flex',
    justifyContent: 'center'
  },
}
