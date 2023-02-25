import { getAuth } from "firebase/auth";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";
import app from "../../Firebase/firebase";

const PrivateRoute = ({ children }) => {
  const {loading,user}= useContext(AuthProvider);
  
  let location = useLocation();

  if(loading){
    return <p>Loading...</p>
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
  
  
};

export default PrivateRoute;
