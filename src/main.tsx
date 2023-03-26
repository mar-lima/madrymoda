import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { GlobalStyle } from "./Style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./Style/theme";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
