import { Home } from "../../screen/Home/index";
import Login from "../Login";
import Transit from "../Transit";

export const routes = [
  {
    path: "/",
    code: "",
    component: Transit,
    meta: {
      name: "中转页面",
    },
  },
  {
    path: "/home",
    code: "",
    component: Home,
    meta: {
      name: "首页",
    },
    hidemenu: true,
  },
  {
    path: "/login",
    code: "",
    component: Login,
    meta: {
      name: "登录",
    },
  },
  {
    path: "/resister",
    code: "",
    component: Login,
    meta: {
      name: "注册",
    },
  },
];
