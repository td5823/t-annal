import React from "react";
import { Layout } from "antd";

import Iframe from "./Iframe";
import Sider from "./Sider";
import Head from "./Head";

const Content: React.FC<any> = () => {
  return (
    <Layout.Content>
      <Head />
      <Layout className="full">
        <Sider />
        <Iframe />
      </Layout>
    </Layout.Content>
  );
};

export default React.memo(Content);
