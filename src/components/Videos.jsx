import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles"


// ***** STYLES SECTION *****
const useStyles = makeStyles((theme) => ({
  root: {
    height: '250px'
  }
}))

// ***** COMPONENT SECTION *****
const Videos = () => {
  const classes= useStyles();
  return <div className={classes.root}></div>;
};

export default Videos;
