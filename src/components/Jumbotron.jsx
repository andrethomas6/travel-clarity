import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import ExploreTwoToneIcon from "@material-ui/icons/ExploreTwoTone";

// ***** STYLES SECTION *****
const heroImages = [
  "https://images.unsplash.com/photo-1545556124-1e664bc6da2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80",
  "https://images.unsplash.com/photo-1478827387698-1527781a4887?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
  "https://images.unsplash.com/photo-1552589252-70f32f048b36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1568&q=80",
];
let selectedHero = parseInt(Math.random() * heroImages.length);

const useStyles = makeStyles((theme) => ({
  hero: {
    height: "500px",
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(${heroImages[selectedHero]})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    justifyItems: "stretch",
  },
  heroText: {
    flexBasis: "1000px",
    color: "#fff",
    textShadow: "1px 1px 1px grey, 3px 3px 3px olive",
  },
  title: {
    fontFamily: "Helvetica",
  },
}));

// ***** COMPONENT SECTION *****
const Jumbotron = () => {
  const classes = useStyles();
  return (
    <Box className={classes.hero}>
      <Typography variant="h1" className={classes.heroText}>
        ARRIVED
        <ExploreTwoToneIcon />
        <ExploreTwoToneIcon />
        <ExploreTwoToneIcon />
      </Typography>

      <Typography variant="h2" className={classes.heroText}>
        Prepare to explore the World
      </Typography>
      <Typography variant="h4" className={classes.heroText}>
        Let's find the best places to go!
      </Typography>
    </Box>
  );
};

export default Jumbotron;
