import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Search from "./Search.jsx";
import Info from "./Info.jsx";
import Videos from './Videos.jsx';
import Maps from './Maps.jsx';
import Reviews from './Reviews.jsx';
import { Grid, Paper, Box, Button } from "@material-ui/core";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [],
      category: ""
    }
  }

  handleSearch() {
    axios.get('/info', {
      params: {
        location: this.state.locations,
        category: this.state.category
      }
      
    })
  }


  render() {
    return (
      <Box m={-1} >
        <Grid item xs={12}><Navbar /></Grid>
        <Grid item xs={12}><Jumbotron /></Grid>
        <Grid item xs={12}><Search /></Grid>
        <Grid item xs={12}><Info /></Grid>
        <Grid item xs={12}><Reviews /></Grid>
        <Grid item xs={12}><Videos /></Grid>
       {/* 
        <Grid item xs={12}><Maps /></Grid>
        */}
        <Button onClick={this.handleSearch}>Test Button</Button>
        
      </Box>
    );
  }
}

export default App;
