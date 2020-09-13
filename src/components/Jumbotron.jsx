import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Button,
  Typography,
  IconButton,
  Card,
  CardMedia,
} from "@material-ui/core";
import ExploreTwoToneIcon from "@material-ui/icons/ExploreTwoTone";
import FindReplaceIcon from "@material-ui/icons/FindReplace";


// ***** STYLES SECTION *****
const useStyles = makeStyles((theme) => ({
  media: {
    height: "500px",
  },
  title: {
    color: "#fff",
    fontFamily: "Helvetica",
    fontWeight: "bold",
    paddingTop: "100px",
    paddingLeft: "200px",
    textAlign: "left",
    textShadow: "2px 2px 2px grey, 3px 3px 3px olive",
  },
}));


// ***** COMPONENT SECTION *****
const Jumbotron = () => {
  const classes = useStyles();
  return (
    <Card alignItems="center">
      <CardMedia
        className={classes.media}
        image={
          "https://images.unsplash.com/photo-1545556124-1e664bc6da2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80"
        }
      >
        <Grid
          container
          className={classes.title}
          direction="column"
          alignItems="start"
          justify="end"
          xs={7}
          spacing={1}
        >
          <Typography item variant="h1">
            ARRIVED
            <ExploreTwoToneIcon />
            <ExploreTwoToneIcon />
            <ExploreTwoToneIcon />
          </Typography>
          <Typography variant="h2">Prepare to explore the World</Typography>
          <Typography variant="h4">
            Let's find your next destination!
          </Typography>
          <Box>
            <Button color="primary" size="medium" variant="contained" square>
              <FindReplaceIcon /> SHUFFLE
            </Button>
          </Box>
        </Grid>
      </CardMedia>
    </Card>
  );
};

export default Jumbotron;
