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
  const [clickSeeMore, setClickSeeMore] = useState(false)


  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await getURL("recipe");
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
          !clickSeeMore ? recipes.filter((_, index) => index < 10).map(recipe => (	
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
                <img	
                  src={recipe.thumbnail}	
                  alt="No thumbnail :("	
                  width="100"	
                  height="100"	
                />	
              </Box>	
              <Link to={"/recipes/" + recipe._id}>	
                <ListItemText	
                  primary={recipe.name}	
                />	
              </Link>	
            </Box>))	
        }	
      </Box>

      <Box className={classes.seeMoreButton}>
        <Button
          onClick={() => setClickSeeMore(!clickSeeMore)}
          variant="contained"
          color="secondary">
          {!clickSeeMore ? "See More" : "See Less"}
        </Button>
      </Box>
    </div>
  );
};
export default RecipeList;