import React, { useState } from "react";
import { Box, Paper, Grid, Typography, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@material-ui/core";

// ***** STYLES SECTION *****
const useStyles = makeStyles((theme) => ({
  heading: {
    backgroundColor: "#dae1e7",
    // color: "#fff"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
    maxWidth: 300,
  },
  fields: {
    alignItems: "space-around",
  },
}));

// ***** COMPONENT SECTION *****
const Search = () => {
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
  console.log("category:", category);
  console.log("city:", city);

  return (
    <Accordion className={classes.heading}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>SEARCH</Typography>
      </AccordionSummary>
      <AccordionDetails className={classes.fields}>
        <Grid container justify="space-around">
          <Grid item xs={12} sm={"auto"}>
            <TextField
              id="outlined-search"
              name="city"
              label="Search City"
              type="search"
              variant="outlined"
              value={city}
              onChange={(event) => handleChange(event)}
            />
          </Grid>
          <Grid item xs={12} sm={"auto"}>
            <Button variant="outlined">SEARCH</Button>
          </Grid>
          <Grid item xs={12} sm={"auto"}>
            <TextField
              id="outlined-search"
              name="Country"
              label="Search Country"
              type="search"
              variant="outlined"
              value={country}
              onChange={(event) => handleChange(event)}
            />
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
