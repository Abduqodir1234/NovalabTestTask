import { Avatar } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import AppLayout from "../components/layout"
import { StoreProps } from "../redux/store"

let ProfilePage = () =>{
    let {name,year,pantone_value} = useSelector((state:StoreProps)=>state.auth)
    return (
        <AppLayout breadcrumb={[{url:'/',name:'Home'},{url:'/profile',name:"Profile"}]}>
            <h3>Name: {name}</h3>
            <h3>Year: {year}</h3>
            <h3>Pantone Value: {pantone_value}</h3>
        </AppLayout>
    )
}
export default ProfilePage