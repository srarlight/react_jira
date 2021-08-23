import React from "react";
import { Tabs } from "antd";

import { AdLogin as AdLoginFrom, Login as LoginFrom } from "./component";
import "./index.scss";
import adImg from "../../assets/ad.jpg";

const { TabPane } = Tabs;

const Login: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-panel">
        <div className="login-content">
          <div className="ad">
            <img src={adImg} alt="" />
          </div>
          <div className="login-box">
            <div className="simple">
              <Tabs className="irs-tabs">
                <TabPane tab="登录" key="adlogin">
                  <LoginFrom />
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      <p className="copy-right">© CopyRight 2021 | 饭派开放平台 fanpai.com</p>
    </div>
  );
};

export default Login;
