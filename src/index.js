import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

// 性能监控
// import reportWebVitals from './reportWebVitals'

const root = createRoot(document.getElementById("root"));

root.render(<App></App>);
