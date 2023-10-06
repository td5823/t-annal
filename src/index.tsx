import React from "react";
import { createRoot } from "react-dom/client";

import Routes from "./routes";

import 'assets/style/index.less'

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  );
}
