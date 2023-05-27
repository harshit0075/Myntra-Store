import { LOGIN_SUCCESS } from "./actionTypes";

const initialState={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false,
}

export const reducer=(state=initialState,{type, payload})=>{
    switch(type){
        case LOGIN_SUCCESS :
            return {
                ...state,
                isAuth:true
                ,token:payload
        
            }
        default:
            return state;
    }
}