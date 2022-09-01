import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Navbar from "./Navbar/navbar";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>,
  rootElement
);
