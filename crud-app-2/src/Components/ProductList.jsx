import React, { useEffect } from 'react'
import { getProducts } from '../redux/Products/action'
import { useDispatch, useSelector } from 'react-redux'
import { ProductCard } from './ProductCard'
import styled from 'styled-components'
import { useSearchParams } from 'react-router-dom'

export const ProductList = () => {
    const [searchParams]=useSearchParams();
    const products= useSelector((store)=>store. productReducer.products)
 const dispatch = useDispatch()

//  console.log(searchParams.getAll("category"));
//  console.log(searchParams.getAll("gender"));

 let obj={
  params:{
      category:searchParams.getAll("category"),
      gender:searchParams.getAll("gender"),
      _sort:searchParams.get("order") && "price",
      _order:searchParams.get("order"),
  }
 }
   useEffect(()=>{
    dispatch(getProducts(obj))
   },[searchParams])

  
  return <DIV>
    {
        products.length > 0 &&
        products.map((el)=>{
            return <ProductCard key={el.id} {...el}/>
        })
    }
  </DIV>
}

const DIV=styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 20px;
`