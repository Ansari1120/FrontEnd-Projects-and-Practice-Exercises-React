import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import About from "../screens/dashboardScreens/about";
import Posts from "../screens/dashboardScreens/post";
import SinglePost from "../screens/singlepost";
import Comments from "../screens/dashboardScreens/comments";
import CommentsForm from "../screens/commentsform";
import Dashboard from "../screens/dashboard";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="post">Posts</Link>
          <Link to="comments">comments</Link>
          <Link to="dashboard">GO to Dashboard</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="post" element={<Posts />} />
          <Route path="singlepost/:id" element={<SinglePost />} />
          <Route path="comments" element={<Comments />} />
          <Route path="commentform" element={<CommentsForm />} />
          <Route path="commentform/:id" element={<CommentsForm />} />
          <Route path="dashboard/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
