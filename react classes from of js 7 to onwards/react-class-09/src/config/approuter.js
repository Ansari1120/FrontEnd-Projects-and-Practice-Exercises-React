import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../screens/home";
import About from "../screens/about";
import Posts from "../screens/post";
import SinglePost from "../screens/singlepost";
import Comments from "../screens/comments";
import CommentsForm from "../screens/commentsform";

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="post">Posts</Link>
          <Link to="comments">comments</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="post" element={<Posts />} />
          <Route path="singlepost/:id" element={<SinglePost />} />
          <Route path="comments" element={<Comments />} />
          <Route path="commentform" element={<CommentsForm />} />
          <Route path="commentform/:id" element={<CommentsForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
