import axios from "axios"
import { useQuery } from "react-query"

let useUserItem = (id:any,onError:any) =>{
    return useQuery(['fetch-users-item',id],async()=>await axios.get(`/users/${id}`),{onError})
}
export default useUserItem;