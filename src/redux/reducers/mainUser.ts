let initialData = {}

 
export const mainUser = (state=initialData,action:{type:string;data?:any})=>{
    switch(action.type){
        case "GET_MAIN_USER":
            return {
                ...action.data
            }
        default:
            return state;
    }
}