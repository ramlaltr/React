import React from "react";
import Routes from "./routes";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

const rootElement = document.getElementById("root");

ReactDOM.render(<Routes />, rootElement);

if (module.hot) {
  module.hot.accept("./routes", () => {
    const NextApp = require("./routes").default;
    ReactDOM.render(<NextApp />, rootElement);
  });
}
