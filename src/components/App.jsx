import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Info from "./Info.jsx";
import Videos from './Videos.jsx';
import Maps from './Maps.jsx';
import Reviews from './Reviews.jsx';
import { Grid, Paper, Box } from "@material-ui/core";

class App extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item xs={12}><Navbar /></Grid>
        <Grid item xs={12}><Jumbotron /></Grid>
        <Grid item xs={12}><Info /></Grid>
       {/* 
       <Grid item xs={12}><Videos /></Grid>
        <Grid item xs={12}><Maps /></Grid>
        <Grid item xs={12}><Reviews /></Grid>
        */}
        
      </Grid>
    );
  }
}

export default App;
