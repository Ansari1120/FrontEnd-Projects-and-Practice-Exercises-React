import { BrowserRouter, Route, Routes } from "react-router-dom";
import SinglePost from "../screens/singlepost";
import CommentsForm from "../screens/commentsform";
import Dashboard from "../screens/dashboard";
import UserLoginSignin from "../screens/UserLoginSignin";
import ProtectedRoute from "./ProtectedRoute";

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
          <Route path="dashboard/*" element={<ProtectedRoute Component={Dashboard} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
