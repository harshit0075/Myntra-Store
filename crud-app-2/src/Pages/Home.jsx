import SideBar from "../components/SideBar";
import Products from "./Products";
import styled from "styled-components"
const Home = ()=>{
    return(
        <DIV>
        <div className="side-bar">
            <SideBar/>
        </div>
        <div className="products">
            <Products/>
        </div>
           
        </DIV>
    )
}
const DIV=styled.div`
display: flex;
margin-top:20px ;
.side-bar{
    width: 15%;
}
.products{
    width: 85%;
}
`
export default Home;