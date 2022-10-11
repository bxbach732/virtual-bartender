import { createTheme } from "@mui/material/styles";
//App theme is defined here.
//The app is wrapped with the theme in app.js
const theme = createTheme({
  palette: {
    primary: {
      main: "#e8dfd5",
    },
    secondary: {
      main: "#493725",
    },
    Tertiary: {
      main: "#847362",
    },
  },
});

export default theme;
