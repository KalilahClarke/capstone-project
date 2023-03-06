//DEPENDENCIES
import { useContext } from "react";
import { UserContext } from "../Providers/UserProviders";
import { Navigate } from "react-router-dom";

const Protected = ({children}) => {
    const user =  useContext(UserContext);
    
    
    
    if(!user){
        return <Navigate to="/" />
    }

    return children;
};

export default Protected;