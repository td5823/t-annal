import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
import { createRoot } from "react-dom/client";
import Login from "./Login";
const root = document.getElementById("root");
if (root) {
    createRoot(root).render(_jsxs(Fragment, { children: [_jsx("div", { style: { backgroundColor: "#3333", width: 20, height: 20 }, children: "123" }), _jsx(Login, {})] }));
}
