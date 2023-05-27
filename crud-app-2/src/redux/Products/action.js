import axios from "axios"
import { POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"

export const postProduct=(newProduct)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.post("http://localhost:8080/products", newProduct)
    .then((res)=>{
        dispatch({type:POST_PRODUCT_SUCCESS, payload:res.data})
    }).catch((err)=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}