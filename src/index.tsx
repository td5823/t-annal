import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Bubble from "./components/Bubble";

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(
    <Fragment>
      {/* <App /> */}
      <Bubble />
    </Fragment>
  );
}
