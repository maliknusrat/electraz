import { useContext } from "react";
import { AuthContext } from './../Provider/AuthProvider';
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user ,loading} = useContext(AuthContext)
    const loacation = useLocation()
    
    if(loading){
        return
    }
      
    if(user){
        return children;
    }
    return <Navigate state={loacation.pathname} to="/login"></Navigate>
};

export default PrivateRoute;