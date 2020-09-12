import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Info from "./Info.jsx";
import Videos from './Videos.jsx';
import Maps from './Maps.jsx';
import Reviews from './Reviews.jsx';
import { Grid, Paper } from "@material-ui/core";

class App extends React.Component {
  render() {
    return (
      <Paper>
        <Navbar />
        <Jumbotron />
        <Info />
        <Videos />
        <Maps />
        <Reviews />
      </Paper>
    );
  }
}

export default App;
