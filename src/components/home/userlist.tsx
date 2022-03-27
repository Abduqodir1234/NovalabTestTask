import { Col, Empty, Pagination, Row } from "antd"
import { FC } from "react";
import { useSelector } from "react-redux";
import useUsersList from "../../Queryhooks/useUsersList"
import { StoreProps } from "../../redux/store";
import UserItem from "../user/item"
import { EmptyContainer, UserListContainer } from "./style";

interface UserItemInterFace{
    id:number;
    email:string;
    first_name:string;
    last_name:string;
    avatar:string
}


interface UserList{
    handlePageChange:(page:number,pageSize:number)=>void;
    page:number;
}

let UserList:FC<UserList> = ({handlePageChange,page}) =>{
    const data = useSelector((state:StoreProps)=>state.users.list)
    return(
        <>
            <Row>
                {data?.data?.length!==0 ? data?.data?.map((one:UserItemInterFace)=>(
                    <Col xs={24} xl={8} xxl={5} md={12} sm={24} lg={8} key={one.id} >
                    <UserListContainer>
                        <UserItem
                            {...one}
                        />
                    </UserListContainer>
                </Col>
                ))
                :
                (
                   <EmptyContainer>
                        <Empty className="empty"/>
                   </EmptyContainer>
                )}
                <Col span={24}>
                    <Pagination 
                        onChange={handlePageChange} 
                        defaultPageSize={data?.per_page} 
                        defaultCurrent={page} 
                        total={data?.total}
                    />
                </Col>
            </Row>
        </>
    )
}
export default UserList