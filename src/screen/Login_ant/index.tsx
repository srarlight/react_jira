import React, { useEffect } from "react";
import { Tabs } from "antd";
import { Login as LoginFrom } from "./component";
import "./index.scss";
import adImg from "../../assets/login-bg.png";
import { useHistory } from "react-router-dom";
const { TabPane } = Tabs;
const Login: React.FC = () => {
  const history = useHistory();
  console.log(history.location.pathname);
  const pathName = history.location.pathname;
  const tabName = pathName === "/login" ? "登陆" : "注册";
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
                <TabPane tab={tabName} key="adlogin">
                  <LoginFrom path={pathName} />
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
