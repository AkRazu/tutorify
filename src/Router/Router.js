import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home/Home/Home";
import Main from "../components/Main/Main";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default router;
