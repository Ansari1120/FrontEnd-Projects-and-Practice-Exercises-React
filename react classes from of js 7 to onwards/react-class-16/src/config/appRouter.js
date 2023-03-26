import { BrowserRouter, Route, Routes } from "react-router-dom";
import SinglePost from "../screens/singlepost";
import CommentsForm from "../screens/commentsform";
import Dashboard from "../screens/dashboard";
import UserLoginSignin from "../screens/UserLoginSignin";
import ProtectedRoute from "./ProtectedRoute";
import Registration from "../screens/dashboardScreens/form";
import Institute from "../screens/InstituteScreens/institute";
import Admin from "../screens/AdminScreens/admin";
import Student from "../screens/StudentScreens/student";
import Studentregistration from "../screens/StudentScreens/StudentRegistration";

export default function AppRouter() {
  // ProtectedRoute
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLoginSignin />} />
          <Route path="singlepost/:id" element={<SinglePost />} />
          <Route path="commentform" element={<CommentsForm />} />
          <Route path="commentform/:id" element={<CommentsForm />} />
          {/* <Route path="dashboard/*" element={<Dashboard />} /> */}
          <Route
            path="dashboard/*"
            element={<ProtectedRoute Component={Dashboard} />}
          />
          <Route path="/form" element={<Registration />} />
          <Route path="/institute/*" element={<Institute />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/student/*" element={<Student />} />
          <Route path="/studentRegistration" element={<Studentregistration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
