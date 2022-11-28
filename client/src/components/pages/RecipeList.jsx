import React, { useState, useEffect } from "react";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { getURL } from "../tools";
import useStyles from "../materialui/styles";
// render Recipes List page (https://virtual-bartender1.herokuapp.com/#/recipes)

const RecipeList = () => {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);
  const [showMore, setShowMore] = useState(false)

  // fetch all recipes from server when the page is loaded
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await getURL("/recipe");
      const Recipes = await response.json();
      setRecipes(Recipes);
    };
    fetchRecipes();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>Great Recipes You Should Know</div>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        className={classes.recipesContainer}>
        {
          // render 12 first recipes if we are showing less
          !showMore ? recipes.filter((_, index) => index < 12).map(recipe => (
            <Box key={recipe._id} className={classes.recipe}>
              <Box className="img">
                <Link to={"/recipes/" + recipe._id}>
                  <img
                    src={recipe.thumbnail}
                    alt="No thumbnail :("
                    width="150"
                    height="150"
                  />
                </Link>
              </Box>
              <ListItemText
                primary={recipe.name}
              />
            </Box>
          )) :
            // render all recipes if we are showing more
            recipes.map(recipe => (
              <Box key={recipe._id} className={classes.recipe}>
                <Box className="img">
                  <Link to={"/recipes/" + recipe._id}>
                    <img
                      src={recipe.thumbnail}
                      alt="No thumbnail :("
                      width="150"
                      height="150"
                    />
                  </Link>
                </Box>
                <ListItemText
                  primary={recipe.name}
                />
              </Box>))
        }
      </Box>
      <Box className={classes.showMoreButton}>
        <Button
          onClick={() => setShowMore(!showMore)}
          variant="contained"
          color="secondary">
          {!showMore ? "Show More" : "Show Less"}
        </Button>
      </Box>
    </div>
  );
};

export default RecipeList;
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
    margin: '2rem auto 1rem',
  },
}
