import service from "./index";
const apiUrl = process.env.REACT_APP_API_URL;
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
export const Login = (data:{userName:string,password:string}) => fetch(`${apiUrl}/login`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
}).then(response=>{
    if(response.ok){
        return response.json();
    }else {
        return Promise.reject(data)
    }
})
export const register = (value:any) => service.post("/users",value);
export const sendEmail = (data:any) => service.post("/email",data);
//路由跳转时校验权限
export const validate=()=> service.get('/users/me')
//查询该角色有哪些权限
export const getUserPermissions=(id:number)=> service.get(`/users-permissions/roles/${id}`)
