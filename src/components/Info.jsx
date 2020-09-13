import React from "react";
import { Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// ***** STYLES SECTION *****
const useStyles = makeStyles((theme) => ({
  info: {
    height: "450px",
  },
}));

// ***** COMPONENT SECTION *****
const Info = () => {
  const classes = useStyles();
  return <Card className={classes.info}>INFO</Card>;
};

export default Info;
