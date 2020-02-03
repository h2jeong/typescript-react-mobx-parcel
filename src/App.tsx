import React from "react";
import "./App.scss";
import { List } from "./components/List";
import { Maker } from "./components/Maker";

const App = () => {
  return (
    <div className="App">
      <Maker />
      <List />
    </div>
  );
};

export default App;
