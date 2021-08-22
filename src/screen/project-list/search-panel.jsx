export const SearchPanel = ({users, params, setParams }) => {
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
