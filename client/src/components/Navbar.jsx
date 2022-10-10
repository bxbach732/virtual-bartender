import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import styles from "../scss/main.scss";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.test}>
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item>
              <Link to="/">
                <Button type="button" variant="contained" color="secondary">
                  Home
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/barshelf">
                <Button type="button" variant="contained" color="secondary">
                  Bar Shelf
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/recipes">
                <Button type="button" variant="contained" color="secondary">
                  Recipe List
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/about">
                <Button type="button" variant="contained" color="secondary">
                  About
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;