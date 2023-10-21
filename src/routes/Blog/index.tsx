import React, { lazy } from "react";

const Home = lazy(() => import("../../pages/Blog/Home"));
const Login = lazy(() => import("../../pages/Blog/Login"));

const Blog = [
  {
    path: "/blog/home",
    element: <Home />,
  },
  {
    path: "/blog/login",
    element: <Login />,
  },
];

export default Blog;
