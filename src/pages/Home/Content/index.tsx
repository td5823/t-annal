import React, { useEffect } from "react";
import { shallow } from "zustand/shallow";
import { Layout } from "antd";

import { storeHome } from "store/Home";

import Iframe from "./Iframe";
import Sider from "./Sider";
import Head from "./Head";

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
    <Layout.Content>
      <Head />
      <Layout className="full">
        <Sider />
        <Iframe />
      </Layout>
    </Layout.Content>
  );
};

export default React.memo(Home);
