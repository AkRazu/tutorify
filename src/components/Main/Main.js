import React from "react";
import Footer from "../Pages/Footer/Footer";
import Navbar from "../Pages/Home/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <Navbar>
      <Outlet />
      <Footer />
    </Navbar>
  );
};

export default Main;
