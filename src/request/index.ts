//在index.js中引入axios
import axios, { AxiosResponse } from "axios";
//引入qs模块，用来序列化post类型的数据
import QS from "qs";
//antd的message提示组件，大家可根据自己的ui组件更改。
import { message } from "antd";
import jsSHA from "jssha";
import { responseEnum } from "./responseEnum";
import { Simulate } from "react-dom/test-utils";
//保存环境变量
const isPrd = process.env.NODE_ENV === "production";
const isAuthRequest = (url: string) => {
  return url.startsWith("/auth/local/register");
};
//区分开发环境还是生产环境基础URL
export const baseUrl = isPrd
  ? "https://www.production.com"
  : "http://localhost:1337";

//设置axios基础路径
const service = axios.create({
  baseURL: baseUrl
});
// 请求拦截器
service.interceptors.request.use((config: any) => {
    // 每次发送请求之前本地存储中是否存在token，也可以通过Redux这里只演示通过本地拿到token
    // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const { headers, url = "", data } = config;
    //在每次的请求中添加token

    //序列化请求参数，不然post请求参数后台接收不正常
    config.data = QS.stringify(config.data);
    return config;
  },
  (error) => {
    return error;
  }
);
// 响应拦截器
service.interceptors.response.use((response: AxiosResponse) => {
  //根据返回不同的状态码做不同的事情
  // 这里一定要和后台开发人员协商好统一的错误状态码
  switch (response.status) {
    case 200:
      return response.data;
    case 401:
      //未登录处理方法
      break;
    case 403:
      //token过期处理方法
      break;
    default:
      message.error(response.data.msg);
  }
}, (error) => { //拦截错误信息
  const msg = error.response.data.message[0]["messages"][0].message || error.response.data.message[0]["messages"][0].id;
  console.log("response", msg);
  message.error(responseEnum[msg] || msg);
  return Promise.reject(error);
});
//最后把封装好的axios导出
export default service;
