import React from "react";
import { Layout } from "antd";

import Menu from "./Menu";

const Home = () => {
  return (
    <Layout.Header style={{ backgroundColor: "unset" }}>
      <Menu />
    </Layout.Header>
  );
};

export default Home;
