import React from "react";
import {Form, Input,Button} from "antd";

import styled from "@emotion/styled";
import {useAuth} from "../context/auth-context";
export const Login = ()=>{
    const {login} = useAuth()
    const handleSubmit = async (values :{
        userName:string;
        password:string
    })=>{
        try {
          await login(values)
        }catch (e){

        }
    }
    return (
        <Form onFinish={handleSubmit}>
            <Form.Item
                name={"userName"}
                rules={[{ required: true, message: "请输入用户名" }]}
            >
                <Input placeholder={"用户名"} type="text" id={"userName"} />
            </Form.Item>
            <Form.Item
                name={"password"}
                rules={[{ required: true, message: "请输入密码" }]}
            >
                <Input placeholder={"密码"} type="password" id={"password"} />
            </Form.Item>
            <Form.Item>
                <LongButton  type={"primary"} htmlType={"submit"}>登录</LongButton>
            </Form.Item>
        </Form>
    )
}
const LongButton = styled(Button)`
  width: 100%;
`