let get_auth_user = (data:any) =>{
    return{
        type:"GET_MAIN_USER",
        data
    }
}

export default get_auth_user;