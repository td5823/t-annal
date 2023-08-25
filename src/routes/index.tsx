import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

console.log('123');

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
