import React from "react";
import { Layout } from "antd";

import Head from "./Head";
import SubContent from "./SubContent";

const Main: React.FC<any> = () => {
  return (
    <Layout>
      <Head />
      <SubContent />
    </Layout>
  );
};

export default React.memo(Main);
