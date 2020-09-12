import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Info from "./Info.jsx";
import Videos from './Videos.jsx';
import Maps from './Maps.jsx';
import Reviews from './Reviews.jsx';
import { Grid } from "@material-ui/core";

class App extends React.Component {
  render() {
    return (
      <Grid>
        <Navbar />
        <Jumbotron />
        <Info />
        <Videos />
        <Maps />
        <Reviews />
      </Grid>
    );
  }
}

export default App;
