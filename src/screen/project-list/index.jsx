import { List } from "./list";
import { SearchPanel } from "./search-panel";
import {  useState } from "react";
import { cleanObject, useMounted } from "../../util/index";
import { getList, getUsers } from "../../request/api";
import { useDebounce } from "react-use";

export const ProjectList = () => {
  const [params, setParams] = useState({
    name: "",
    personId: ""
  });
  const [users, setUsers] = useState([]);
  const [list ,setList] = useState([])
  useDebounce(() => {
    getList(cleanObject(params)).then(res => {
      setList(res)
    })
  } ,200,
    [params]);

  useMounted((value) => {
    getUsers().then(res => {
      setUsers(res);
    });
  });
  return <div>
    <SearchPanel users={users} params={params} setParams={setParams} />
    <List users={users} list={list} setList={setList}/>
  </div>;
};
