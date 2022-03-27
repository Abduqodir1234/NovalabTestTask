import { ArrowRightOutlined,EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, Avatar, Popconfirm } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface UserItemProps{
    id:number;
    email:string;
    first_name:string;
    last_name:string;
    avatar:string;
}

let UserItem:FC<UserItemProps> = ({id,email,first_name,last_name,avatar}) =>{
    return(
        <Card
          style={{ width: 300, marginTop: 16 }}
          actions={[
            <Link to={`/users/${id}`}><ArrowRightOutlined /></Link>,
          ]}
        >
            <Meta
              avatar={<Avatar src={avatar} />}
              title={first_name + " "  + last_name}
              description={email}
            />
        </Card>    
    )
}
export default UserItem