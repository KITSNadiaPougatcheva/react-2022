import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

console.log("Script starting...");

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
console.log("Script finished");
