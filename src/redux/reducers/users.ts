const initialData = {
    list:[],
    current:{}
}

 
export const users = (state=initialData,action:{type:string;data?:any})=>{
    switch(action.type){
        case "GET_USER":
            return {
                ...state,
                list:action.data
            }
        case "GET_CURRENT_USER":
            return{
                ...state,
                current:action.data
            }
        default:
            return state;
    }

}