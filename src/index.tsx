import React from "react";
import { createRoot } from "react-dom/client";

import Routes from "./routes"; // 使用短路径

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  );
}
