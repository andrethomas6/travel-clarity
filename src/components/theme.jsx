import { createMuiTheme } from "@material-ui/core/styles";

// ***** THEME CONFIGURATIONS *****
const theme = createMuiTheme({
  palette: {
    // type: "dark",
    primary: {
      main: "#142850",
    },
    secondary: {
      main: "#00909e",
    },
  },
  background: {
    default: "#fff",
  },
});

export default theme;
