import React from "react";
import { Layout, Flex } from "antd";

import Carousel from "./Carousel";
import AuthorInfo from "./AuthorInfo";
import Tags from "./Tags";
import List from "./List";

const questionIcon = require("./giphy.gif");

const Home = () => {
  return (
    <Layout.Content
      style={{
        backgroundColor: "unset",
        overflow: "auto",
      }}
    >
      <div className="flex flex-center flex-middle" style={{ height: 450 }}>
        <img src={questionIcon} style={{ width: 800, height: 400 }}></img>
      </div>
      <Layout
        style={{
          backgroundColor: "unset",
        }}
      >
        <Layout.Content>
          <Carousel />
          <List />
        </Layout.Content>
        <Layout.Sider
          width={280}
          theme="light"
          style={{ margin: 20, backgroundColor: "unset" }}
        >
          <Flex gap={20} vertical>
            <AuthorInfo />
            <Tags />
          </Flex>
        </Layout.Sider>
      </Layout>
    </Layout.Content>
  );
};

export default Home;
