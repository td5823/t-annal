import React, { lazy } from "react";

const Home = lazy(() => import("../../pages/Blog/Home"));

const Blog = [
  {
    path: "/blog/home",
    element: <Home />,
  },
];

export default Blog;
