import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Blog from "./Blog";

const Home = lazy(() => import("../pages/Home"));

// console.log('123');

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  ...Blog,
]);

const AppRouter = (): any => <RouterProvider router={router} />;

export default AppRouter;
