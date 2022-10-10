import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
const types = ["Liquid", "Fruit", "Spice"];
const ingredientList = [
  { name: "tequila", isalcoholic: "true", type: "Liquid" },
  { name: "vodka", isalcoholic: "true", type: "Liquid" },
  { name: "banana", type: "Fruit" },
  { name: "mint", type: "Spice" },
];

const BarShelf = () => {
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
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <Grid item>
          <h2>Impossible recipes</h2>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BarShelf;
