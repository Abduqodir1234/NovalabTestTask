import axios from "axios"

let SignInRequest =async (data:any)=>await axios({
    method:"POST",
    url:`/login`,
    data:data
})
export default SignInRequest