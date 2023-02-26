import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "../screens/about";
import SinglePost from "../screens/singlepost";
import Home from "../screens/Home"

export default function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home Page</Link>
          <Link to="/about">About Page</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="singlepost/:id" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}