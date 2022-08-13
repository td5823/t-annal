import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Spin } from 'components/antd'

const Home = React.lazy(() => import("../containers/Home"));

// 登录模块
const Login = React.lazy(() => import("../containers/Login"));

// 博客模块
const Blog = React.lazy(() => import("../containers/Blog"));

const routers = [
  // 登录模块
  {
    title: "Home",
    path: "/home",
    component: Home,
  },
  // 主页面
  {
    title: "Main",
    path: "/main/*",
    component: lazy(() => import("../containers/Main/routes")),
  },
  {
    title: "About",
    path: "/login",
    component: Login,
  },
  {
    title: "Blog",
    path: "/blog",
    component: Blog,
  },
];

const tRouter = () => {
  return (
    <Router>
      <Suspense fallback={<Spin size="large" />}>
        <Routes>
          {routers.map((item, index) => {
            const { ...other } = item;
            return (
              <Route
                caseSensitive // 区分大小写
                key={index}
                path={item.path}
                element={<item.component />} // 不是老版本的：component 或 render
                {...other}
              />
            );
          })}
          <Route exact path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default tRouter;
