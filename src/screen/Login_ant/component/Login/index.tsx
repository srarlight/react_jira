import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./index.scss";

interface ILoginData {
  loginName: string;
  loginPwd: string;
}
interface LoginProp {
  path: any;
}

const Login: React.FC<LoginProp> = ({ path }) => {
  // 错误信息
  const [errorMsg, setErrorMsg] = useState("");
  // 路由操作
  const history = useHistory();
  /**
   * 处理登录
   * @param values
   */
  const handleSubmit = (values: any) => {};

  return (
    <Form
      wrapperCol={{ span: 20 }}
      className="login-form"
      name="login-form"
      size="large"
      onFinish={handleSubmit}
    >
      <Form.Item
        name="loginName"
        rules={[{ required: true, message: "请输入账号" }]}
      >
        <Input
          prefix={<UserOutlined className="form-icon" />}
          placeholder="账号/邮箱"
        />
      </Form.Item>
      <Form.Item
        name="loginPwd"
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入密码"
        />
      </Form.Item>
      <p className="err-msg">{errorMsg}</p>
      {/*<a className="login-form-forgot" href="">*/}
      {/*  忘记密码？*/}
      {/*</a>*/}
      {path === "/login" ? (
        <a onClick={() => history.push("/resister")}>去注册!</a>
      ) : (
        <a onClick={() => history.push("/login")}>去登陆</a>
      )}
      <Form.Item className="btn-form-item">
        <Button className="btn-login" htmlType="submit">
          {path === "/login" ? "登录" : "注册"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
