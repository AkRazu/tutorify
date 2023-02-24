import { getAuth } from "firebase/auth";
import React from "react";
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
import app from "../../Firebase/firebase";

const PrivateRoute = ({ children }) => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  console.log(user?.uid);
  let location = useLocation();
  console.log(localStorage?.getItem("token"));
  if (localStorage?.getItem("token")) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
