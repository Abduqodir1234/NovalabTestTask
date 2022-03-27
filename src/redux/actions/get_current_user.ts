let get_current_user = (data:any) =>{
    return{
        type:"GET_CURRENT_USER",
        data
    }
}

export default get_current_user;