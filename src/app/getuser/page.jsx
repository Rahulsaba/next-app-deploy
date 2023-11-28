
import {fetchData} from "../api/config";
import { Space, Table, Tag } from 'antd';

export default async function GetUser() {
    const {data} = await fetchData();


    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'First Name',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Last Name',
            dataIndex: 'last_name',
            key: 'last_name',
        },
    ];


    return (
        <>
            <Table columns={columns} dataSource={data}   style={{ width: '100%' }}/>
        </>
    )
}