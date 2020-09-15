import React from "react";
import { Grid, Card, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// ***** STYLES SECTION *****
const useStyles = makeStyles((theme) => ({
  info: {
    height: "450px",
    backgroundColor: "#142850"
  },
}));

// ***** COMPONENT SECTION *****
const Info = () => {
  const classes = useStyles();
  return <Box className={classes.info}>INFO</Box>;
};

export default Info;
