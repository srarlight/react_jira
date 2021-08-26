import "./index.scss";
import React, {useEffect, useState} from "react";
import {Form, Input, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete} from 'antd';
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useHistory} from "react-router-dom";
import {register, sendEmail} from "../../request/api";
import {useAsync, useAsyncFn} from "react-use";
const LoginForm = () => {
    const history = useHistory();
    const [state, handleSubmit] = useAsyncFn(async (values) => {
        const response = await register(values);
        return response
    }, []);
  // const  [res, send] = useAsyncFn(async ()=>{
  //     const response = await sendEmail({
  //         to: '1147862235@qq.com',
  //         subject: `Order Confirmation - South of Sleep ${new Date(Date.now())}`,
  //         text: 'Your order has been processed',
  //         html: '<bold>Except your stuff to be broken upon arriving</bold>'
  //     });
  //     return response
  // },[])
const send = ()=>{
    console.log(45)
    sendEmail(
        {
                to: '1147862235@qq.com',
                subject: `Order Confirmation - South of Sleep ${new Date(Date.now())}`,
                text: 'Your order has been processed',
                html: '<bold>Except your stuff to be broken upon arriving</bold>'
            }
    ).then(res=>{

    })
}
    const [form] = Form.useForm();

    const formItemLayout = {
        labelCol: {
            xs: {span: 24},
            sm: {span: 8},
        },
        wrapperCol: {
            xs: {span: 24},
            sm: {span: 16},
        },
    };


    return (
        <div style={{display: 'flex', width: '100%', height: '100%', justifyContent: "center", alignItems: "center"}}
             className="loginBody">
            <div className="form">
                <h1> 注册 </h1>
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    initialValues={{
                        username: 'starlight',
                        password: 'yi1147862235',
                        confirm: 'yi1147862235',
                        email:'1147862235@qq.com'
                    }}
                    scrollToFirstError
                    className="login-form"
                    size="large"
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        name="username"
                        rules={[{required: true, message: "请输入账号"}]}
                    >
                        <Input
                            style={{width: '288px'}}
                            prefix={<UserOutlined className="form-icon"/>}
                            placeholder="账号"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"

                        rules={[{required: true, message: "请输入密码"}]}
                    >
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            style={{width: '288px'}}
                            placeholder="请输入密码"
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirm"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: '请确认密码!',
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('两次输入密码不一致!'));
                                },
                            }),
                        ]}
                    >
                        <Input.Password style={{width: '288px'}} placeholder="确认密码"
                                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: '邮箱格式不正确!',
                            },
                            {
                                required: true,
                                message: '请输入邮箱!',
                            },
                        ]}
                    >
                        <Input
                            style={{width: '288px'}}
                            prefix={<UserOutlined className="form-icon"/>}
                            placeholder="邮箱"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Row gutter={8}>
                            <Col span={20}>
                                <Form.Item
                                    name="captcha"
                                    noStyle
                                    rules={[{required: true, message: '请输入验证码!'}]}
                                >
                                    <Input placeholder="验证码"/>
                                </Form.Item>
                            </Col>
                            <Col span={4}>
                                <Button onClick={send}>获取验证码</Button>
                            </Col>
                        </Row>
                    </Form.Item>

                    <p className="remember">
                        <a onClick={() => history.push("/login")}>去登录</a>
                    </p>
                    <p className="login">
                        <input type="submit" value="注册"/>
                    </p>
                </Form>
            </div>
        </div>
    );
};
export default LoginForm;
