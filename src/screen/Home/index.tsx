import { Layout, Menu, Breadcrumb } from "antd";
import logo from "../../style/image/logo.jpg";

import "./index.scss";
const { Header, Content, Footer } = Layout;
export const Home = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo">
          <img src={logo} alt="logo加载失败" />
          <span className="title">饭派开放平台</span>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          className="home-menu"
        >
          {new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
          })}
        </Menu>
        <div className="person">
          <a>个人中心</a>
        </div>
      </Header>
      <Content style={{ padding: "0 50px" }}>内容</Content>
      <Footer style={{ textAlign: "center" }}>
        © CopyRight 2021 | 饭派开放平台 fanpai.com
      </Footer>
    </Layout>
  );
};
