import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/styles";

import "./index.css";
import App from "./containers/App";
import theme from "./commons/Theme";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { CssBaseline } from "@mui/material";

const appProvider = (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);

ReactDOM.render(appProvider, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
