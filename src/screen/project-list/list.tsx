import { Table, Space } from 'antd';
import { ColumnsType } from 'antd/es/table';

import {User} from './search-panel'
interface Project {
  id: number,
  name: string,
  personId: number,
  organization: string,
  created: number
}
interface ListProps {
  users:User[];
  list:Project[]
}
export const List = ({users,list}:ListProps)=>{
  const columns:ColumnsType<Project> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },

    {
      title: 'personId',
      dataIndex: 'personId',
      key: 'personId',
      render: (text, record) => (
          users?.find((user:User)=>user.id === text)?.name
      ),
    },
    {
      title: 'organization',
      dataIndex: 'organization',
      key: 'organization',
    },

    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
          <Space size="middle">
            <a>Invite {record.name}</a>
            <a>Delete</a>
          </Space>
      ),
    },
  ];
  return <Table columns={columns} dataSource={list} rowKey='id' bordered/>
}