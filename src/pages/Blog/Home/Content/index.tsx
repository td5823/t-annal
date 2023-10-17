import React from "react";
import { Layout } from "antd";

import AuthorInfo from "./AuthorInfo";

const Home = () => {
  return (
    <Layout style={{ backgroundColor: "unset" }}>
      <Layout.Content style={{ backgroundColor: "#fff" }}>内容</Layout.Content>
      <Layout.Sider
        width={280}
        theme="light"
        style={{ marginInline: 20, backgroundColor: "unset" }}
      >
        <AuthorInfo />
      </Layout.Sider>
    </Layout>
  );
};

export default Home;
