import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/theme.jsx';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("app")
);
