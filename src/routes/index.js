import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 登录模块
const Login = React.lazy(() => import("../containers/Login"));
// const Login =import("../containers/Login");
// import Login from "../containers/Login";

const routers = [
  {
    title: "About",
    path: "/login",
    component: Login,
  },
];

const tRouter = () => {
  return (
    <Router>
      <Routes>
        {routers.map((item, index) => {
          return (
            <Route
              caseSensitive // 区分大小写
              key={index}
              exact
              path={item.path}
              element={<item.component />} // 不是老版本的：component 或 render
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default tRouter;
