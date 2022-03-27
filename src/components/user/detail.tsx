import { Avatar } from "antd"
import { useSelector } from "react-redux"
import { StoreProps } from "../../redux/store"

let UserDetailWrapper = () =>{
    let {first_name,last_name,email,avatar} = useSelector((state:StoreProps)=>state.users.current)
    return(
        <>
            <Avatar size={64} src={avatar}  /><br/><br/>
            <h3>Firstname:{first_name}</h3>
            <h3>Lastname:{last_name}</h3>
            <h3>Email:{email}</h3>
        </>
    )
}
export default UserDetailWrapper