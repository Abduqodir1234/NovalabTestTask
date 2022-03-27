import { useEffect, useState } from "react";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import UserList from "../components/home/userlist";
import AppLayout from "../components/layout";
import Loading from "../components/Loading";
import openNotification from "../components/notification";
import useUsersList from "../Queryhooks/useUsersList";
import get_users from "../redux/actions/get_user";

let IndexPage = () =>{
    let [page,setpage] = useState(1)
    let {data,isLoading,refetch} = useUsersList(page)
    let dispatch = useDispatch()
    const onError = (e:any) => {
        openNotification("error",e.response.data.error)
    }

    const onSuccess = () =>{
        refetch()
    }
    let handlePageChange = (page:number,pageSize:number)=>{
        setpage(page)
    }
    if(!isLoading){
        dispatch(get_users(data?.data))
        return (
            <AppLayout breadcrumb={[{url:'/',name:'Home'},{url:'#',name:" "}]}>
                <UserList
                    handlePageChange={handlePageChange}
                    page={page}
                />
            </AppLayout>
        )
    }
    else{
        return <Loading />
    }
}

export default IndexPage;