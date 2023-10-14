import React from "react";
import { createRoot } from "react-dom/client";
import Routes from "./routes";
import "assets/style/index.less";

const root: any = document.getElementById("root");

const render = (Component: any) => {
  createRoot(root).render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  );
};

render(Routes);

if ((module as any).hot) {
  (module as any).hot.accept("./routes", () => {
    const NextRoutes = require("./routes").default;
    render(NextRoutes);
  });
}
