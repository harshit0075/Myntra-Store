import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoute=({children})=>{
const isAuth=useSelector(store=>store.authReducer.isAuth)
const location=useLocation();
console.log(isAuth)
return(
    isAuth?children:<Navigate to={"/login"} state={location.pathname} replace={true}/>
)
}
export default PrivateRoute;