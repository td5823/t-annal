import React from "react";
import { Layout, Flex, Image } from "antd";

import Carousel from "./Carousel";
import AuthorInfo from "./AuthorInfo";
import Tags from "./Tags";
import List from "./List";

const Home = () => {
  return (
    <Layout.Content
      style={{
        backgroundColor: "unset",
        overflow: "auto",
      }}
    >
      <div className="flex flex-center flex-middle" style={{ height: 450 }}>
        <Image
          width={800}
          height={400}
          src="https://lmg.jj20.com/up/allimg/1113/050920095302/20050Z95302-18-1200.jpg"
          style={{ borderRadius: 12 }}
        />
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
