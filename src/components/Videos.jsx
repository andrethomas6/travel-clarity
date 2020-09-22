import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"

// **FUTURE ENHANCEMENT** 

// ***** STYLES SECTION *****
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100px'
  }
}))

// ***** COMPONENT SECTION *****
const Videos = () => {
  const classes= useStyles();
  return <div className={classes.root}></div>;
};

export default Videos;
