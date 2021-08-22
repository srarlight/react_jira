import React from "react";

export interface User {
  id: number,
  name: string,

}
interface IProps {
  users:User[];
  params : {
    name:string,
    personId:string
  };
  setParams : (value:any)=>void;
}

export const SearchPanel:React.FC<IProps> = ({users,params,setParams}) => {
  return <div>
    <input value={params.name} onChange={(ev) => {
      setParams({
        ...params,
        name: ev.target.value
      });
    }
    } />
    <select value={params.personId} onChange={ev => {
      setParams({
        ...params,
        personId: ev.target.value
      });
    }
    } >
      <option value=''>负责人</option>
      {users.map(user=><option value={user.id} key={user.id}>{user.name}</option>)}
    </select>
  </div>;
};
