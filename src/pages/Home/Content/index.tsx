import React from "react";
import { Layout } from "antd";

import Head from "./Head";
import Content from "./Content";

const Main: React.FC<any> = () => {
  return (
    <Layout.Content>
      <Head />
      <Content />
    </Layout.Content>
  );
};

export default React.memo(Main);
