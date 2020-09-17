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
      location: "Dubai",
      category: "",
      stories: [],
    };
  }


  setQuery(query) {
    this.setState({
      location: query,
    });
  }

  getStories() {
    axios
      .get("/story", {
        params: {
          city: this.state.location,
        },
      })
      .then((results) => {
        this.setState({
          stories: results.data,
        });
      })
      .catch((error) => console.log(error));
  }

  handleSearch() {
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
      .then(() => {
        this.getStories();
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  handleShuffle() {
    let options = [
      "Paris",
      "Madrid",
      "Atlanta",
      "Shanghai",
      "Rome",
      "Istanbul",
      "Cancun",
      "Munich",
      "Bangkok",
      "London",
      "Dubai",
      "Auckland",
      "Seoul",
      "Sydney",
      "Lima",
      "Cairo",
      "Mumbai",
      "Marrakech",
      "Toronto"
    ];
    this.setState({
      location: options[parseInt(Math.random() * (options.length - 1))],
    });
    setTimeout(this.handleSearch.bind(this), 1000);
  }

  componentDidMount() {
    this.getStories()
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
            handleShuffle={() => this.handleShuffle.bind(this)}
          />
        </Grid>
        <Grid item xs={12}>
          <Info info={this.state.info} />
        </Grid>
        <Grid item xs={12}>
          <Story
            stories={this.state.stories}
            location={this.state.info[0].location_ids}
            getStories={() => this.getStories.bind(this)}
          />
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
