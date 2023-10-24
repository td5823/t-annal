import React from "react";
import { createRoot } from "react-dom/client";
import Routes from "./routes";
import { ConfigProvider } from "antd";
import * as Sentry from "@sentry/react";
import "assets/style/index.less";

const root: any = document.getElementById("root");

// 初始化监控
Sentry.init({
  dsn: "https://a49ae4feb33b36f2bd85ad6887877697@o4506103814356992.ingest.sentry.io/4506103820386304",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

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
              headerPadding: "0x 12px",
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
