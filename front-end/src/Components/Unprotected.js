//DEPENDENCIES
import { useContext } from "react";
import { UserContext } from "../Providers/UserProviders";
import { Navigate } from "react-router-dom";

const Unprotected = ({ children }) => {
  const user = useContext(UserContext);

  if (user) {
    return <Navigate to="/dashboard"  />;
  }

  return children;
};

export default Unprotected;
