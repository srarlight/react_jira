import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./index.scss";

interface ILoginData {
  loginName: string;
  loginPwd: string;
}

const Login: React.FC = () => {
  // 错误信息
  const [errorMsg, setErrorMsg] = useState("");
  // 路由操作
  const history = useHistory();
  /**
   * 处理登录
   * @param values
   */
  const handleSubmit = (values: any) => {
    // post_Login(values)
    //   .then(res => {
    //     InitMenuState(null);
    //     InitCombineData(null);
    //     // 处理登录数据
    //     helper.loginProcessingData(res);
    //     // 跳转至首页
    //     history.replace('/home');
    //   })
    //   .catch(err => {
    //     console.info(err);
    //   });
  };

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
          placeholder="请输入密码"
        />
      </Form.Item>
      <p className="err-msg">{errorMsg}</p>
      <Form.Item className="btn-form-item">
        <Button className="btn-login" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
