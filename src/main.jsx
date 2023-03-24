import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import { Rout } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Rout />
    <GlobalStyles />
  </BrowserRouter>
);
