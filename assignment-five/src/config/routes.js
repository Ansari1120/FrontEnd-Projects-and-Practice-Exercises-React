import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Posts from "../screens/posts";
import Todos from "../screens/todos";
import Users from "../screens/users";
import Photos from "../screens/photos";
import Comments from "../screens/comments";
export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/todos">Todos Page </Link>
          <Link to="/users"> Users Page</Link>
          <Link to="/posts"> Posts Page</Link>
          <Link to="/photos"> photos Page</Link>
          <Link to="/comments"> Comments Page</Link>

        </nav>
        <Routes>
          <Route path="todos" element={<Todos />} />
          <Route path="users" element={<Users />} />
          <Route path="posts" element={<Posts />} />
          <Route path="photos" element={<Photos />} />
          <Route path="comments" element={<Comments />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
