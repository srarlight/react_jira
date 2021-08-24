import { Home } from "~src/screen/Home";
import Login from "../Login";
export const routes = [
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
];
