import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ProductCard = ({id,image,name,brand,price,gender,category}) => {
  return (
    <DIV>
        <img src={image} alt='product-image'/>
        <h3>Brand:{brand}</h3>
        <h3>{name}</h3>
        <p>Gender:{gender}</p>
        <p>Price:{price}</p>
        <p>Category:{category}</p>
        <button>
           <Link to={`/edit/${id}`}> Edit</Link>
           </button>
    </DIV>
  )
}

const DIV=styled.div`
        border: 1px solid gray;
    img{
        width: 50%;
    }
`