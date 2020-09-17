import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Search from "./Search.jsx";
import Info from "./Info.jsx";
import Videos from "./Videos.jsx";
import Maps from "./Maps.jsx";
import Story from "./Story.jsx";
import { Grid, Paper, Box, Button } from "@material-ui/core";
import axios from "axios";
import { dubai } from "./sightseeing.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: dubai,
      location: "",
      category: "",
    };
  }

  setQuery(query) {
    this.setState({
      location: query,
    });
  }
  handleSearch() {
    console.log("location", location);
    axios
      .get("/info", {
        params: {
          location: this.state.location,
          category: this.state.category,
        },
      })
      .then((response) => {
        // console.log(response);
        this.setState({
          info: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Box m={-1}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Jumbotron />
        </Grid>
        <Grid item xs={12}>
          <Search
            query={this.state.location}
            setQuery={this.setQuery.bind(this)}
            handleSearch={() => this.handleSearch.bind(this)}
          />
        </Grid>
        <Grid item xs={12}>
          <Info info={this.state.info} />
        </Grid>
        <Grid item xs={12}>
          <Story location={this.state.info[1].location_ids} />
        </Grid>
        <Grid item xs={12}>
          <Videos />
        </Grid>
        {/* 
        <Grid item xs={12}><Maps /></Grid>
        */}
      </Box>
    );
  }
}

export default App;
