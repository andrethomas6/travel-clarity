import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Search from "./Search.jsx";
import Info from "./Info.jsx";
// **FUTURE ENHANCEMENT** import Videos from "./Videos.jsx";
// **FUTURE ENHANCEMENT** import Maps from "./Maps.jsx";
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
      found: true,
      options: [
        "Paris",
        "Madrid",
        "Atlanta",
        "Rome",
        "Istanbul",
        "Munich",
        "Bangkok",
        "London",
        "Dubai",
        "Auckland",
        "Seoul",
        "Sydney",
        "Cairo",
        "Mumbai",
        "Toronto",
      ]
    };
  }

  // ***** SEARCH STRING *****
  setQuery(query) {
    this.setState({
      location: query,
    });
  }

  // ***** SEARCH LOCATION FUNCTIONALITY *****
  handleSearch() {
    if (this.state.found === false) {
      this.setState({
        found: true
      })
    }
    axios
    .get("/info", {
      params: {
        location: this.state.location,
        category: this.state.category,
      },
    })
    .then((response) => {
      if (response.data.length === 0) {
        this.setState({
          location: this.state.options[parseInt(Math.random() * (this.state.options.length - 1))]
        })
        this.handleSearch()
        this.setState({
          found: false,
        })
      } else {
        
        return response;
      }
    })
    .then((response) => {
      this.setState({
        info: response.data,
      });
    })
    .then(() => {
      this.getStories();
    })
    .catch((error) => {
      console.log("Error", error);
    });
  }
  
  
  // ***** SHUFFLE LOCATION FUNCTIONALITY *****
  handleShuffle() {
    
    this.setState({
      location: this.state.options[parseInt(Math.random() * (this.state.options.length - 1))],
    });
    setTimeout(this.handleSearch.bind(this), 1000);
  }

  // ***** RENDER STORIES *****
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
      .catch((error) => console.log('RETURNED NOTHING',error));
  }
  
  // **** INITIAL APP *****
  componentDidMount() {
    this.getStories();
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
            found={this.state.found}
            location={this.state.info[0].location_ids}
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
        {/* <Grid item xs={12}>
          <Videos />
        </Grid> */}
        {/* 
        <Grid item xs={12}><Maps /></Grid>
        */}
      </Box>
    );
  }
}

export default App;
