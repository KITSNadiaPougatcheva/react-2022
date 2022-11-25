import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { App } from "./components/App/App";

console.log("Script starting...");

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  rootElement
);

console.log("Script finished");
