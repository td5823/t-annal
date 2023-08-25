import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";

// console.log('123');

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
