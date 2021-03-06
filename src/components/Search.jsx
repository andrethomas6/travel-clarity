import React, { useState } from "react";
import { Grid, Typography, TextField, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SearchIcon from "@material-ui/icons/Search";
import ShuffleIcon from "@material-ui/icons/Shuffle";

// ***** STYLES SECTION *****
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading: {
    backgroundColor: "#dae1e7",
    minHeight: "75px",
  },
  fields: {
    margin: "auto",
    maxWidth: "700px",
    alignSelf: "center",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  found: {
    display: "none",
  },
  unknown: {
    backgroundColor: "#00909e",
    color: "#dae1e7",
  },
}));

// ***** COMPONENT SECTION *****
const Search = ({
  query,
  found,
  location,
  setQuery,
  handleSearch,
  handleShuffle,
}) => {
  const classes = useStyles();

  // **FUTURE ENHANCEMENT**
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

  return (
    <div className={classes.root}>
      <Grid container className={classes.heading} justify="center">
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
      <Grid
        container
        className={classes.heading}
        justify="center"
        className={found ? classes.found : classes.unknown}
      >
        <Typography variant="h4">
          Our experts are still researching that locations. Check out{" "}
          {location[0]} for now!
        </Typography>
      </Grid>
    </div>
  );
};

export default Search;
