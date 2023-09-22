import axios from "axios"
import { DELETE_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "../actioType"

export const postProduct=(newProduct)=>(dispatch)=>{

    dispatch({type:PRODUCT_REQUEST})
    axios.post("http://localhost:8080/products",newProduct)
    .then((res)=>{
        console.log(res.data)
        dispatch({type:POST_PRODUCT_SUCCESS})
    })
    .catch((err)=>{
        console.log(err.message)
        dispatch({type:PRODUCT_FAILURE,payload:err.message})
    })
}

export const getProduct=(paramsObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get("http://localhost:8080/products",paramsObj)
    .then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:PRODUCT_FAILURE,payload:err.message})
    })
}

export const updateProduct=(updatedItem,id)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    return axios.patch(`http://localhost:8080/products/${id}`,updatedItem)
    .then((res)=>{
        dispatch({type:PATCH_PRODUCT_SUCCESS})
    })
    .catch((err)=>{
        dispatch({type:PRODUCT_FAILURE,payload:err.message})
    })
}

export const deleteProduct=(id)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    return axios.delete(`http://localhost:8080/products/${id}`)
    .then((res)=>{
        //console.log(res)
        dispatch({type:DELETE_PRODUCT_SUCCESS,payload:id})
    })
    .catch((err)=>{
        dispatch({type:PRODUCT_FAILURE,payload:err.message})
    })
}