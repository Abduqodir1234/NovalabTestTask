import {combineReducers,createStore} from "redux"
import { mainUser } from "./reducers/mainUser"
import { users } from "./reducers/users"


export interface StoreProps{
    auth:{
        name:string;
        pantone_value:string;
        year:string;
        avatar:string;
    },
    users:{
        list:{
            data:[],
            per_page:number;
            total:number;
        },
        current:any
    }

}

const rootReducer = combineReducers({
    auth:mainUser,
    users
})

export const store = createStore(rootReducer)

store.subscribe(()=>console.log(store.getState()))