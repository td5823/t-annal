import React, { useEffect } from "react";
import { shallow } from "zustand/shallow";
import { Layout } from "antd";

import { storeHome } from "store/Home";

import Sider from "./Sider";
import Content from "./Content";

const Home: React.FC<any> = () => {
  const { getMenuInfo }: any = storeHome(
    (props: any) => ({
      // menus: props.menus,
      getMenuInfo: props.getMenuInfo,
    }),
    shallow
  );

  useEffect(() => {
    getMenuInfo();
  }, []); // eslint-disable-line

  return (
    <Layout className="full" hasSider>
      <Sider />
      <Content />
    </Layout>
  );
};

export default Home
