import React, { useContext, useEffect } from "react";
import { Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { AuthContext, useAuth, User } from "../../context/auth-context";

export const LoginForm1 = () => {
  const {login,a} = useAuth()
  console.log(a)
  const handleSubmit = (value: User) => {
    login(value);
  };
  return (
    <div style={{ display: "flex", width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}
         className="loginBody">
      <div className="form">
        <h1> Login </h1>
        {/*{user}*/}
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          className="login-form"
          name="login-form"
          size="large"
          onFinish={(value) => handleSubmit(value)}
        >
          <Form.Item
            name="userName"
            rules={[{ required: true, message: "请输入账号" }]}
          >
            <Input
              style={{ width: "288px" }}
              prefix={<UserOutlined className="form-icon" />}
              placeholder="账号"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              style={{ width: "288px" }}
              placeholder="请输入密码"
            />
          </Form.Item>

          <p className="login">
            <input type="submit" value="Login" />
          </p>
        </Form>
      </div>
    </div>
  );
};
