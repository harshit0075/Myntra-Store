import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../Redux/productReducer/action";

import ProductCard from "../components/ProductCard";
import  styled  from "styled-components";
import { useSearchParams } from "react-router-dom";
const Products = ()=>{
const dispatch=useDispatch();
const products=useSelector(store=>store.productReducer.products)
const [searchParams,setSearchParams]=useSearchParams()

let paramsObj={
    params:{
        gender:searchParams.getAll("gender"),
        color:searchParams.getAll("color"),
        category:searchParams.getAll("category"),
        _sort:searchParams.get("order") && "price",
        _order:searchParams.get("order")
    }
}
useEffect(()=>{
    dispatch(getProduct(paramsObj));
},[searchParams])


console.log(searchParams.getAll("gender"))
    return(
        <DIV>
          {products.length>0 && products.map((ele)=>(
            <ProductCard key={ele.id}{...ele}/>
          ))}
        </DIV>
    )
}
const DIV=styled.div`
display: grid;
grid-template-columns: repeat(4,1fr);
gap: 20px;
`
export default Products;