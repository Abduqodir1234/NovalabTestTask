import axios from "axios"
import { useQuery } from "react-query"

let useUsersList = (page:number) =>{
    return useQuery(['fetch-users-list',page],()=>axios.get(`/users?page=${page}`),{cacheTime:90*1000})
} 
export default useUsersList;