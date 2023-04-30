import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comment from "../Screens/DashboardScreen/comment";
import Dashboard from "../Screens/dashboard";
import Home from "../Screens/home";
import Login from "../Compoments/SMLogin";
import Signup from "../Compoments/SMSignup";
import Institute from "../Screens/InstituteScreens/institute";
import ProtectedRoute from "./protectedroute";
import Student from "../Screens/StudentScreen/student"
import Admin from "../Screens/AdminScreen/Admin";
import Studentregistration from "../Screens/StudentRegistrationScreen/studentregistration";

function Approuter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="dashboard/*"  
          element={<Dashboard />}
        ></Route>

        <Route path="Home" element></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Approuter;
