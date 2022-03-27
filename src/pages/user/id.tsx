import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import AppLayout from "../../components/layout"
import Loading from "../../components/Loading"
import UserDetailWrapper from "../../components/user/detail"
import useUserItem from "../../Queryhooks/useUserItem"
import get_current_user from "../../redux/actions/get_current_user"

let UserDetail = () =>{
    let {id} = useParams()
    let dispatch = useDispatch()
    const onError = (e:any) =>{
        console.log(e)
    }
    let res = useUserItem(id,onError)
    if(res?.data?.data){
        dispatch(get_current_user(res?.data?.data?.data))
        return (
            <AppLayout breadcrumb={[{url:'/',name:'Home'},{url:'#',name:"Users"},{url:"#",name:id}]}>
                <UserDetailWrapper />
            </AppLayout>
        )
    }
    else{
        return<Loading />
    }
}
export default UserDetail