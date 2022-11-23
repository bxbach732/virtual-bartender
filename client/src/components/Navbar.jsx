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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.test}>
        <Toolbar>
          <Grid container spacing={3} className={classes.gridContainer}>
            <Grid item >
              <Link to="/">
                <Button className="link-item" type="button" variant="contained" color="secondary">
                  Home
                </Button>
              </Link>
            </Grid>
              {auth.user ? (
            <Grid item >
                <Link to="/barshelf">
                  <Button className="link-item" type="button" variant="contained" color="secondary">
                    Bar Shelf
                  </Button>
                </Link>
            </Grid>

              ) : (
                <Fragment>
                  <Grid item >
                  <Link to="/signup">
                    <Button className="link-item" type="button" variant="contained" color="secondary">
                      Sign up
                    </Button>
                  </Link>
                  </Grid>
                  <Grid item >
                  <Link to="/login">
                    <Button className="link-item" type="button" variant="contained" color="secondary">
                      Log in
                    </Button>
                  </Link>
                  </Grid>

                </Fragment>
              )}
            <Grid item >
              <Link to="/recipes">
                <Button className="link-item" type="button" variant="contained" color="secondary">
                  Recipe List
                </Button>
              </Link>
            </Grid>
            <Grid item >
              <Link to="/about">
                <Button className="link-item" type="button" variant="contained" color="secondary">
                  About
                </Button>
              </Link>
            </Grid>
          </Grid>
          {auth.user ? (
            <Button className="link-item"
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