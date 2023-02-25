import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home/Home";
import Main from "../components/Main/Main";
import NotFound from "../components/NotFound/NotFound";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Courses from "../components/Pages/Courses/Courses";
import Get from "../components/Pages/Get/Get";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/get",
        element: <Get />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/courses",
        element: (
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
