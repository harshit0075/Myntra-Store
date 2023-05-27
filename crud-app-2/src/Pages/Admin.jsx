import React, { useState } from 'react'
import styled from 'styled-components'

import { postProduct } from '../redux/Products/action';
import { useDispatch } from 'react-redux';

const initialState = {
  image: "",
  price: 0,
  brand: "",
  category: "",
  gender: ""
}

export const Admin = () => {
  const [product, setProduct] = useState(initialState);
  const dispatch=useDispatch();
  const handleChange = (e) => {
    const {value, name}=e.target
setProduct((prev)=>{
  return {...prev, [name]:name ==="price" ? +value:value}
});

}

const handleSubmit=(e)=>{
  e.preventDefault();
 dispatch(postProduct(product));
  }

  return (
    <Div>
      <h1>Add Products</h1>
      <form action='' onSubmit={handleSubmit}>
        <input type='text' placeholder='Image' value={product.image}
         onChange={(e) => handleChange(e)} name='image' />
        <input type="number" placeholder='Price' value={product.price}
         onChange={(e) => handleChange(e)} name='price' />
        <input type="text" placeholder='Brand' value={product.brand}
         onChange={(e) => handleChange(e)}name='brand'  />
        <input type="text" placeholder='Name' value={product.name}
         onChange={(e) => handleChange(e)}name='name' />
        <select name="category" 
        onChange={(e)=>handleChange(e)}>
          <option value="">Select Category</option>
          <option value="top-wear">Top Wear</option>
          <option value="bottom-wear">Bottom Wear</option>
          <option value="shoes">Shoes</option>
        </select>
        <select name="gender" value={product.gender}
        onChange={(e)=>handleChange(e)}>
          <option value="">Select Gender</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
        </select>
        <button type='submit'>Add Product</button>
      </form>
    </Div>
  )
}

const Div = styled.div`
  width: 400px;
  margin: auto;
  border: 1px solid green;
  padding: 20px;

  form{
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;

    input{
      height: 40px;
      font-size: large;
      width: 90%;
    }

    select{
      height: 40px;
      font-size: large;
      width: 90%;
    }

    button{
      width: 50%;
      height: 35px;
      cursor: pointer;
      border: none;
    }

  }
`