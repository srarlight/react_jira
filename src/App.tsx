import React from "react";
import "./style/reset.css";
import "./App.scss";

import { Home } from "./screen/Home";
import Login from "./screen/Login";
function App() {
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
