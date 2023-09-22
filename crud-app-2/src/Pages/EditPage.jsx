import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components"
import { updateProduct } from "../Redux/productReducer/action";
const EditPage=()=>{
    const {id} = useParams();
    const [item,setItem]=useState({});
    const navigate=useNavigate();
    const location=useLocation();
    const products = useSelector(store=>store.productReducer.products)
    const dispatch=useDispatch();
    useEffect(() => {
        const data = products.find((el) => el.id === +id);
        if (data) {
          setItem(data);
        }
      }, [products, id]);
      

      const handlesubmit=(e)=>{
        e.preventDefault()
        dispatch(updateProduct(item,id))
        .then(()=>{
            alert("Updated Successfully...!")
            navigate("/")})
      }
      const handleChange=(e)=>{
        const {name,value}=e.target
        setItem({...item,[name]:name === "price" || name === "discount" ? +value: value})
      }
    return(
        <DIV>
            <form onSubmit={handlesubmit}>
                <h1>Edit Product - {item.id}</h1>
                <input type="text" 
                    placeholder="Name"
                    name="name"
                    value={item.name} 
                    onChange={handleChange}
                />
                <input type="text"
                    placeholder="Image URL"
                    name="image"
                    value={item.image}
                    onChange={handleChange}
                />
                <input type="text"
                    placeholder="Brand"
                    name="brand"
                    value={item.brand}
                    onChange={handleChange}
                />
                <input type="number" 
                    placeholder="Price"
                    name="price"
                    value={item.price}
                    onChange={handleChange}
                />
                <input type="number" 
                    placeholder="Discount"
                    name="discount"
                    value={item.discount}
                    onChange={handleChange}
                />
                <select name="gender" value={item.gender} onChange={handleChange}>
                    <option value="">select Gender</option>
                    <option value="male">Men</option>
                    <option value="female">Women</option>
                    <option value="kids">Kids</option>
                </select>
                <select name="category" value={item.category} onChange={handleChange}>
                    <option value="">select Categary</option>
                    <option value="topwear">Top wear</option>
                    <option value="bottomwear">Bottom Wear</option>
                    <option value="saree">Saree</option>
                    <option value="dress">Dress</option>
                    <option value="footwear">Foot Wear</option>
                </select>
                <select name="color" value={item.color} onChange={handleChange}>
                    <option value="">select color</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                    <option value="pink">Pink</option>
                    <option value="yellow">Yellow</option>
                </select>
                <button type="submit">Update Product</button>
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
export default EditPage;