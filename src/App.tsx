import React from "react";
import ReactDOM from "react-dom/client";
import CardComponent from "./lib/components/SampleComponent";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <CardComponent />
  </ThemeProvider>
);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

export default App;
