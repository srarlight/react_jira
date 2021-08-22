import service from "./index";
export interface IListInfo {
    name: string,
    personId: string
}
export interface IListDate {
    id: number,
    name: string,
    personId: number,
    organization: string,
    created: number
}

export const getList = (info:IListInfo) =>
  service.get<IListDate[],IListInfo>("/projects", {
    params: info,
  });
export const getUsers = () => service.get("/users");