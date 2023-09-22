import { DELETE_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actioType";

const initialState={
    products:[],
    isLoading:false,
    isError:false,
    error:""
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case PRODUCT_REQUEST:
            return{...state,isLoading:true}
        case PRODUCT_FAILURE:
            return{...state,isError:true,isLoading:false,error:payload}
        case POST_PRODUCT_SUCCESS:
            return{...state,isLoading:false}
        case GET_PRODUCT_SUCCESS:
            return{...state,isLoading:false,products:payload}
        case PATCH_PRODUCT_SUCCESS:
            return{...state,isLoading:false}
        case DELETE_PRODUCT_SUCCESS:
            const updatedProducts = state.products.filter(product => product.id !== payload);
            return{...state,isLoading:false,products: updatedProducts}
        default:return state;
    }
}