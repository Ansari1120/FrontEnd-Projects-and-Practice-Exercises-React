import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comment from "../Screens/DashboardScreen/comment";
import Dashboard from "../Screens/dashboard";
import Signup from "../Compoments/SMSignup";
import Institute from "../Screens/InstituteScreens/institute";
import ProtectedRoute from "./protectedroute";
import Student from "../Screens/StudentScreen/student"
import Admin from "../Screens/AdminScreen/Admin";
import Studentregistration from "../Screens/StudentRegistrationScreen/studentregistration";
import Home from "../ReduxCompoments/Home";
import Login from "../ReduxCompoments/Login";
import Product from "../ReduxCompoments/product/product";
import Cart from "../ReduxCompoments/cart/cart";


function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
       

        <Route path="/HomeRedux" element={<Home/>} ></Route>
        <Route path="/LoginRedux" element={<Login/>} ></Route>
        <Route path="/product" element={<Product/>} ></Route>
        <Route path="/Cart" element={<Cart/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;
