import React, { useState } from "react";
import { Box, Paper, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
import ShuffleIcon from '@material-ui/icons/Shuffle';
import {
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Fab,
} from "@material-ui/core";

// ***** STYLES SECTION *****
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    backgroundColor: "#dae1e7",
    minHeight: '75px',
  },
  fields: {
    margin: "auto",
    maxWidth: "700px",
    alignSelf: "center"
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

// ***** COMPONENT SECTION *****
const Search = ({ query, setQuery, handleSearch }) => {
  const classes = useStyles();

  let options =
    "None,Traveling,Shopping,Sleeping,Eating,Sports,Hiking,Relaxing,Playing,Going Out,Sightseeing,Discovering";
  let categoryOptions = options.split(",");

  // Input Value Hooks
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  // Input Functions
  const handleChange = (event) => {
    event.target.name === "category" ? setCategory(event.target.value) : null;
    event.target.name === "city" ? setCity(event.target.value) : null;
    event.target.name === "country" ? setCountry(event.target.value) : null;
  };

  const handleShuffle = () => {
    handleSearch()
  }

  return (
    <div className={classes.root}>
      {/* <Accordion className={classes.heading}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        justify="center"
      >
        <Box marginX="auto" paddingLeft={7}>
        <Typography >Find Your Next Destination!</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails className={classes.fields}>
        <Grid container justify="center" marginX="auto">
          <Grid item xs={12} sm={4}>
            <TextField
              id="outlined-search"
              name="location"
              label="Search Location"
              type="search"
              variant="outlined"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
          <Fab onClick={handleSearch()} variant="extended" className={classes.SearchButton} color="secondary">
            <SearchIcon className={classes.extendedIcon} color="primary"/>
            Search
          </Fab>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion> */}

      <Grid
        container
        className={classes.heading}
        justify="center"
      >
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={4} className={classes.fields}>
          <Fab
            onClick={handleShuffle()}
            variant="extended"
            className={classes.SearchButton}
            color="secondary"
          >
            <ShuffleIcon className={classes.extendedIcon} color="primary" />
            SHUFFLE
          </Fab>
        </Grid>
        <Grid item xs={12} sm={3} className={classes.fields}>
          <TextField
            id="outlined-search"
            name="location"
            label="Search Location"
            type="search"
            variant="outlined"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.fields}>
          <Fab
            onClick={handleSearch()}
            variant="extended"
            className={classes.SearchButton}
            color="secondary"
          >
            <SearchIcon className={classes.extendedIcon} color="primary" />
            SEARCH
          </Fab>
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
