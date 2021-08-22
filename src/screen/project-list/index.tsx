import { List } from "./list";
import { SearchPanel } from "./search-panel";
import {  useState } from "react";
import { cleanObject } from "../../util";
import { getList, getUsers } from "../../request/api";
import {useDebounce, useMount} from "react-use";

export interface IUser {
  id:string;
  name:string;
}

export const ProjectList = () => {
  const [params, setParams] = useState({
    name: "",
    personId: ""
  });
  const [users, setUsers] = useState<any>([]);
  const [list ,setList] = useState<any>([]);
  useDebounce(() => {
    getList(cleanObject(params)).then(res => {
      setList(res)
    })
  } ,200,
    [params]);

  useMount(() => {
    getUsers().then(async res=> {
     await setUsers(res)
    })
  });

  return <div>
    <SearchPanel users={users} params={params} setParams={setParams} />
    <List users={users} list={list} />
  </div>;
};
