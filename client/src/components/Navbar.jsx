import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import styles from "../scss/main.scss";
import { useAuth } from "./useAuth";
import useStyles from "./materialui/styles";

const Navbar = () => {
  const classes = useStyles();
  const auth = useAuth();
  const user = window.localStorage.getItem("user");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.test}>
        <Toolbar>
          <Grid container spacing={3} className={classes.gridContainer}>
            <Grid item>
              <Link to="/">
                <Button type="button" variant="contained" color="secondary" className="link-item" >
                  Home
                </Button>
              </Link>
            </Grid>
            <Grid item>
              {user ? (
                <Link to="/barshelf">
                  <Button type="button" variant="contained" color="secondary" className="link-item" >
                    Bar Shelf
                  </Button>
                </Link>
              ) : (
                <div>
                  <Link to="/login">
                    <Button type="button" variant="contained" color="secondary" className="link-item" >
                      Log in
                    </Button>
                  </Link>
                </div>
              )}
            </Grid>
            <Grid item>
              <Link to="/recipes">
                <Button type="button" variant="contained" color="secondary" className="link-item" >
                  Recipe List
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/about">
                <Button type="button" variant="contained" color="secondary" className="link-item" >
                  About
                </Button>
              </Link>
            </Grid>
            <Grid item>
              <Link to="/contact">
                <Button type="button" variant="contained" color="secondary" className="link-item" >
                  Contact
                </Button>
              </Link>
            </Grid>
          </Grid>
          {user ? (
            <Button
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => auth.signout()}
            >
              Signout
            </Button>
          ) : (
            <Fragment></Fragment>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
