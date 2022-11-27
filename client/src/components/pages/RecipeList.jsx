import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import { Box, Button } from "@mui/material";
import { getURL } from "../tools";
import useStyles from "../materialui/styles";


const RecipeList = () => {
  const classes = useStyles();
  const [recipes, setRecipes] = useState([]);
  const [showMore, setShowMore] = useState(false)


  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await getURL("/recipe");
      const Recipes = await response.json();
      setRecipes(Recipes);
    };
    fetchRecipes();
  }, []);
  return (
    <div>
      <h1>Recipes</h1>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        className={classes.recipesContainer}>
        {
          !showMore ? recipes.filter((_, index) => index < 10).map(recipe => (
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
          )) : recipes.map(recipe => (
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
      <Box className={classes.showButton}>
        <Button
          onClick={() => setShowMore(!showMore)}
          variant="contained"
          color="secondary">
          {!showMore ? "See More" : "See Less"}
        </Button>
      </Box>
    </div>
  );
};
export default RecipeList;