import service from "./index";
export const getUsers = (info) => service.get("/users", info);
export const getList = (info) =>
  service.get("/projects", {
    params: info,
  });
