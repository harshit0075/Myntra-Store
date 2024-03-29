import React, { useState } from "react";
import styled from "styled-components";
import { postProduct } from "../Redux/productReducer/action";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
const initialState={
    name:"",
    brand:"",
    price:"",
    discount:"",
    image:"",
    gender:"",
    category:"",
    color:""
}
const Admin = ()=>{
    const [newProduct, setNewProduct]=useState(initialState);
    const {error,isError} = useSelector((store)=>{
       return{
        error:store.productReducer.error,
        isError:store.productReducer.isError
    }
    },shallowEqual)
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        const {value,name}=e.target
        setNewProduct({...newProduct,[name]:name === "price" || name === "discount" ? +value: value})
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(newProduct)
        dispatch(postProduct(newProduct));
        setNewProduct(initialState)
    }
    return (
        <DIV error={isError.toString()}>
            {error && <h3>{error}</h3>}
            <form onSubmit={handlesubmit}>
                <h1>Add New Product</h1>
                <input type="text" 
                    placeholder="Name"
                    name="name"
                    value={newProduct.name} 
                    onChange={handleChange}
                />
                <input type="text"
                    placeholder="Image URL"
                    name="image"
                    value={newProduct.image}
                    onChange={handleChange}
                />
                <input type="text"
                    placeholder="Brand"
                    name="brand"
                    value={newProduct.brand}
                    onChange={handleChange}
                />
                <input type="number" 
                    placeholder="Price"
                    name="price"
                    value={newProduct.price}
                    onChange={handleChange}
                />
                <input type="number" 
                    placeholder="Discount"
                    name="discount"
                    value={newProduct.discount}
                    onChange={handleChange}
                />
                <select name="gender" value={newProduct.gender} onChange={handleChange}>
                    <option value="">select Gender</option>
                    <option value="male">Men</option>
                    <option value="female">Women</option>
                    <option value="kids">Kids</option>
                </select>
                <select name="category" value={newProduct.category} onChange={handleChange}>
                    <option value="">select Categary</option>
                    <option value="topwear">Top wear</option>
                    <option value="bottomwear">Bottom Wear</option>
                    <option value="saree">Saree</option>
                    <option value="dress">Dress</option>
                    <option value="footwear">Foot Wear</option>
                </select>
                <select name="color" value={newProduct.color} onChange={handleChange}>
                    <option value="">select color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="pink">Pink</option>
                    <option value="yellow">Yellow</option>
                </select>
                <button type="submit">Add Product</button>
            </form>
        </DIV>
    )
}
const DIV=styled.div`
    width: 400px;
    margin: auto;
    margin-top: 30px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    //border: ${({isError})=> (isError==="true"?"1px solid red":"1px solid gray")} ;
    padding: 20px 30px;
form{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    
}
input, select{
    height: 40px;
    width: 100%;
    font-size: larger;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: ${({isError})=> (isError==="true"?"1px solid red":"none")} ;
}
button{
    width: 50%;
    cursor: pointer;
    height: 35px;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    background-color: #219ebc;
}
`
export default Admin;