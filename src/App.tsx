import React from "react";
import "./App.css";
import { List } from "./components/List";
import { Maker } from "./components/Maker";
import { Remover } from "./components/Remover";

const App = () => {
  return (
    <div className="App">
      <Maker />
      <Remover />
      <List />
    </div>
  );
};

export default App;
