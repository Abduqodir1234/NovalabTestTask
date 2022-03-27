import axios from "axios";
import { useQuery } from "react-query";




let useProfileData = (onError:any,onSuccess:(data:any)=>void) => {
    let id = localStorage.getItem('userId')
    const fetcher = () =>axios(`/user/${id}`)
    return useQuery(['fetch-profile-info',id],fetcher,{onError,onSuccess,cacheTime:90*1000})
}
export default useProfileData;