import { BrowserRouter, Route, Routes } from "react-router-dom";
import SinglePost from "../screens/singlepost";
import CommentsForm from "../screens/commentsform";
import Dashboard from "../screens/dashboard";
import UserLoginSignin from "../screens/UserLoginSignin";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "./firebaseconfig";

export default function AppRouter() {
  const auth = getAuth();
  const [UserName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(user.displayName)
      } else setUserName("");
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLoginSignin />} />
          <Route path="singlepost/:id" element={<SinglePost />} />
          <Route path="commentform" element={<CommentsForm />} />
          <Route path="commentform/:id" element={<CommentsForm />} />
          <Route
            path="dashboard/*"
            element={<Dashboard UserName={UserName} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
