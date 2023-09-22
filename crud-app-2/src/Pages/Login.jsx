import React, { useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import styled from "styled-components"
import { login } from "../Redux/authReducer/action";
import { useLocation, useNavigate } from "react-router-dom";
const Login = ()=>{

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const dispatch=useDispatch();
    const location=useLocation();
    const navigate=useNavigate();
    const {isAuth,isError} = useSelector((store)=>{
        return {
            isAuth:store.authReducer.isAuth,
            isError:store.authReducer.isError
        }
    },shallowEqual)

    console.log(isAuth)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const userDetails={
            email,
            password
        }
        dispatch(login(userDetails)).then(()=>navigate(location.state, {replace:true}))     
    } 

    return(
        <DIV error={isError.toString()}>
         <h2>Login Page</h2>
        {isAuth && <h2>Login Successful...!</h2>}
        {isError && <h2>Invalid Credentials...</h2>}
        <form onSubmit={handleSubmit}>
       
        <input
            type="email"
            placeholder="Enter Your Email Here.."
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
        />
        <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter Your Password Here.."
        />
        <button type="submit" >Login</button>
        </form>
           
        </DIV>
    )
}
const DIV=styled.div`
width:400px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
margin: auto;
margin-top: 30px;
padding: 20px 30px;
form{
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
}
input{
    height: 40px;
    width: 100%;
    font-size: larger;
    border-radius: 10px;
    border: ${({error}) => (error=== "true"?"1px solid red":null)};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border: none;
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
export default Login;