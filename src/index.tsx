import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { routes } from "./screen/router";
import "./style/reset.css";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import zhCN from "antd/es/locale/zh_CN";

import { ConfigProvider, Layout, Spin, message } from "antd";
import RouterView from "./screen/components/RouterView";
import { Home } from "../src/screen/Home/index";
ReactDOM.render(
  <React.StrictMode>
    {/*<Home/>*/}
    <ConfigProvider locale={zhCN}>
      <Router>
        <RouterView routes={routes}></RouterView>
      </Router>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
