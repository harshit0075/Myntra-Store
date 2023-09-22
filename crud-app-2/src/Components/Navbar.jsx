import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
const Navbar=()=>{
    return(
        <DIV>
            <h3>Myntra-Clone</h3>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/admin"}>Add Products</Link>
        </DIV>
    )
}
export default Navbar;


const DIV = styled.div`
display: flex;
border-bottom: 1px solid gray;
gap: 20px;
align-items: center;
padding: 0 20px;
font-size: 20px;
font-weight: bold;
text-decoration:none;
color: #219ebc;
a{
    color: Black;
    font-size: 18px;
    text-decoration: none;
}
`;