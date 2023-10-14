import React from "react";
import { Layout } from "antd";

import Sider from "./Sider";
import Main from "./Main";

const Content: React.FC<any> = () => {
  return (
    <Layout className="full">
      <Sider />
      <Main />
    </Layout>
  );
};

export default React.memo(Content);
