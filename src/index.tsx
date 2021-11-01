import React from "react";
import ReactDOM from "react-dom";
import "./style/reset.css";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { LoginForm1 } from "./screen/test";
import { AppProviders } from "./context";

ReactDOM.render(
  <AppProviders>
    <LoginForm1 />
  </AppProviders>,
  document.getElementById("root")
);
reportWebVitals();
