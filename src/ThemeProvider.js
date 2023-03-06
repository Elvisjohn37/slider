import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00d1d0",
    },
    secondary: {
      main: "#f0f0f0",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: () => ({
          backgroundColor: "#000000bf",
          color: "#ffffff",
          padding: "0px 20px",
        }),
      },
    },
  },
});

export default function ThemeProvider({ children }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
