import "./index.scss";
import React, { useEffect } from "react";
import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useHistory} from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();
  useEffect(() => {

  }, []);
  const handleSubmit = (values: any) => {
    console.log(values);

  };
  return (
      <div style={{display:'flex',width:'100%',height:'100%',justifyContent:"center",alignItems:"center"}} className="loginBody">
        <div className="form">
          <h1> Login </h1>
          <Form
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
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
                  style={{width:'288px'}}
                  prefix={<UserOutlined className="form-icon" />}
                  placeholder="账号"
              />
            </Form.Item>
            <Form.Item
                name="loginPwd"
                rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  style={{width:'288px'}}
                  placeholder="请输入密码"
              />
            </Form.Item>
            <p className="remember">
              <a>忘记密码?</a>
              <a onClick={() => history.push("/resister")}>去注册</a>
            </p>
            <p className="login">
              <input type="submit" value="Login" />
            </p>
          </Form>
        </div>
      </div>
  );
};
export default LoginForm;
