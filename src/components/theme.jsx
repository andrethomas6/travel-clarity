import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/lightBlue';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    // type: "dark",
    primary: {
      main: green[500],
    },
    secondary: {
      main: blue[500],
    },
  },
})


export default theme;