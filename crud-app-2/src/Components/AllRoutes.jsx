import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Products from "../pages/Products";
import PrivateRoute from "./PrivateRoute";
import EditPage from "../pages/EditPage";
const AllRoutes = ()=>{
    return(
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<PrivateRoute><Admin/></PrivateRoute>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/edit/:id" element={<PrivateRoute><EditPage/></PrivateRoute>}/>
        <Route path="*" element={<h3>Page Not Found</h3>}/>
    </Routes>
    )
}
export default AllRoutes;