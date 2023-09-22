import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components"
import { deleteProduct } from "../Redux/productReducer/action";
const ProductCard=({id,name,brand,category,price,discount,image,gender,color})=>{
    const isAuth = useSelector(store=>store.authReducer.isAuth)
    const dispatch=useDispatch()

    const handleDelete=()=>{
        dispatch(deleteProduct(id))
        .then(()=>alert("Deleted Product Successfully...!"))
    }
    return(
        <DIV>
            <img src={image} alt={name}/>
            <h2>{name}</h2>
            <h4>Brand: {brand}</h4>
            <h5>Price: ₹{price}</h5>
            <p>Discount: {discount}%</p>
            <div className="btns">
            <div><button>
                <Link to={`/edit/${id}`}>Edit</Link>
            </button></div>
            {isAuth && ( <div>
                
                <button onClick={handleDelete}>Delete</button>
            </div>)}
            </div>
           
        </DIV>
    )
}
const DIV=styled.div`
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
padding: 15px;
img{
    width: 100%;
    height: 400px;
}
.btns{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: auto;
}
button, a{
    width: 7rem;
    height: 2rem;
    font-size: 1.3rem;
    text-decoration: none;
    color: white;
    border: none;
    border-radius: 5px;
    background-color: #219ebc;
    font-weight: bold;
    cursor: pointer;
}
`
export default ProductCard;