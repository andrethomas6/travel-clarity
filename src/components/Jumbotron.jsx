import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Paper,
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
  hero: {
    height: "500px",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url('https://images.unsplash.com/photo-1545556124-1e664bc6da2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80')",
    backgroundPosition: "center",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    justifyItems: 'stretch',
  },
  heroText: {
    flexBasis: '1000px',
    color: "#fff",
    textShadow: "1px 1px 1px grey, 3px 3px 3px olive",
  },
  title: {
    // fontFamily: "Helvetica",
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

      <Typography variant="h2" className={classes.heroText}>Prepare to explore the World</Typography>
      <Typography variant="h4" className={classes.heroText}>Let's find your next destination!</Typography>
    </Box>
  );
};

export default Jumbotron;

// {/* <CardMedia
// className={classes.media}
// image={
//   "https://images.unsplash.com/photo-1545556124-1e664bc6da2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2090&q=80"
// }
// >
// <Grid
//   container
//   className={classes.title}
//   direction="column"
//   alignItems="flex-start"
//   justify="end"
//   xs={7}
//   spacing={1}
// >
//   <Typography variant="h1">
//     ARRIVED
//     <ExploreTwoToneIcon />
//     <ExploreTwoToneIcon />
//     <ExploreTwoToneIcon />
//   </Typography>
//   <Typography variant="h2">Prepare to explore the World</Typography>
//   <Typography variant="h4">
//     Let's find your next destination!
//   </Typography>
//   <Box>
//     <Button color="primary" size="medium" variant="contained" square>
//       <FindReplaceIcon /> SHUFFLE
//     </Button>
//   </Box>
// </Grid>
// </CardMedia> */}
