import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

console.log("Script starting...");

const rootElement = document.getElementById("root");
const header = React.createElement("h1", null, "Hello React !");
ReactDOM.render(header, rootElement);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
console.log("Script finished");
