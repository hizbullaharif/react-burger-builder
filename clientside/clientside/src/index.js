import React from "react";
import ReactDOM from "react-dom";
import Routers from "./Routers";
import { BrowserRouter } from "react-router-dom";
import "./resources/style.css";
import "./resources/burgeringredients.css";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <BrowserRouter>
    <CookiesProvider>
      <Routers />
    </CookiesProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
