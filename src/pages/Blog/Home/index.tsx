import React from "react";

import Layout from "./CanvasAnimation";

import Head from "./Head";
import Content from "./Content";
import Footer from "./Footer";

const Home = () => {
  return (
    <Layout>
      {/** 头部 */}
      <Head />
      {/** 内容 */}
      <Content />
      {/** 尾部 */}
      <Footer />
    </Layout>
  );
};

export default Home;
