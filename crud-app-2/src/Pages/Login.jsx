import React, { useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import styled from "styled-components"
import { login } from '../redux/Authentication/action';

export const Login = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const auth=useSelector((store)=>store.authReducer.isAuth)

    const dispatch=useDispatch()

    const handleLogin=()=>{
        let userData={email, password}
        console.log(userData);
       dispatch(login(userData));
    }
  return (
    <WRAPER>
      <h1>{auth ? "Login Successful":"Login first"}</h1>
        <input type='email' value={email}
         onChange={(e)=>setEmail(e.target.value)}
          placeholder='Email'/>
        <input type='password' value={password}
         onChange={(e)=>setPassword(e.target.value)}
          placeholder='Password'/>
        <button onClick={handleLogin}>Login</button>
    </WRAPER>
  )
}


const WRAPER= styled.div`
width: 400px;
margin: 40px auto;
display: flex;
flex-direction: column;
gap: 15px;
input{
  /* width: 300px; */
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;

}
button{
  height: 35px;
}

`