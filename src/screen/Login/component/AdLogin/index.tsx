import React, { useState } from "react";
import { Form, Button, Input, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./index.scss";
import { spawn } from "child_process";

const AdLogin: React.FC = () => {
  // 错误信息
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (obj: any) => {
    message.info("域账号登录功能暂未开通，请使用系统账号登录");
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
        rules={[{ required: true, message: "请输入域账号" }]}
      >
        <Input
          prefix={<UserOutlined className="form-icon" />}
          placeholder="域账号"
        />
      </Form.Item>

      <Form.Item
        name="loginPwd"
        rules={[{ required: true, message: "请输入域密码" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="请输入域密码"
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

export default AdLogin;
