import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import { AppContainer } from "react-hot-loader";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import zhCN from "antd/es/locale/zh_CN";

import { ConfigProvider, Layout, Spin, message } from "antd";
ReactDOM.render(
  <React.StrictMode>
    <AppContainer>
      <ConfigProvider locale={zhCN}>
        <Router>
          <Layout>{/*<RouterView routes={routes} />*/}</Layout>
        </Router>
      </ConfigProvider>
    </AppContainer>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
