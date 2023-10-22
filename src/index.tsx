import React from "react";
import { createRoot } from "react-dom/client";
import Routes from "./routes";
import { ConfigProvider } from "antd";
import "assets/style/index.less";

const root: any = document.getElementById("root");

const render = (Component: any) => {
  createRoot(root).render(
    <React.StrictMode>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              verticalItemMargin: "0px",
              horizontalMargin: "0px",
            },
            Layout: {
              /* here is your component tokens */
              headerPadding: '0x 12px',
              headerBg: "#ffffff",
            },
          },
        }}
      >
        <Component />
      </ConfigProvider>
    </React.StrictMode>
  );
};

render(Routes);

// if ((module as any).hot) {
//   (module as any).hot.accept("./routes", () => {
//     const NextRoutes = require("./routes").default;
//     render(NextRoutes);
//   });
// }
