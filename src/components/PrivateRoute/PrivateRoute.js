import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthProvider);

  let location = useLocation();

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
