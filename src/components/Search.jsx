import React, { useState } from "react";
import { Box, Paper, Grid, Typography, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from '@material-ui/icons/Search';import {
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Fab
} from "@material-ui/core";

// ***** STYLES SECTION *****
const useStyles = makeStyles((theme) => ({
  heading: {
    backgroundColor: "#dae1e7",
    width: '100%',
    justify: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
    maxWidth: 300,
  },
  fields: {
    justifyItems: "center",
    marginX: 'auto',
    maxWidth: '700px',
  },
  SearchButton: {
    marginX: "15px",
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

  return (
    <Accordion className={classes.heading}>
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
    </Accordion>
  );
};

export default Search;
//  <FormControl className={classes.formControl}>
//   <InputLabel id="category-select-label">Category</InputLabel>
//   <Select
//     labelId="category-select-label"
//     name="category"
//     value={category}
//     onChange={handleChange}
//   >
//     {categoryOptions.map((category) => (
//       <option
//         key={category}
//         value={category}
//       >
//         {category}
//       </option>
//     ))}
//   </Select>
// </FormControl>
//   <FormControl variant="outlined" className={classes.formControl}>
//   <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
//   <Select
//     labelId="demo-simple-select-outlined-label"
//     id="demo-simple-select-outlined"
//     value={category}
//     onChange={handleChange}
//     label="category"
//   >
//     <MenuItem value="">
//       <em>None</em>
//     </MenuItem>
//     <MenuItem value={10}>Ten</MenuItem>
//     <MenuItem value={20}>Twenty</MenuItem>
//     <MenuItem value={30}>Thirty</MenuItem>
//   </Select>
// </FormControl>
