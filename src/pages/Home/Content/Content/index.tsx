import React from "react";
import { Layout } from "antd";

import Iframe from "./Iframe";
import Sider from "./Sider";

const Content: React.FC<any> = () => {
  return (
    <Layout className="full">
      <Sider />
      <Iframe />
    </Layout>
  );
};

export default React.memo(Content);
