import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { StorePrivider } from "./helpers/useStore";
import ListStore from "./stores/list";

const store = new ListStore();

ReactDOM.render(
  <StorePrivider value={store}>
    <App />
  </StorePrivider>,
  document.getElementById("root")
);
