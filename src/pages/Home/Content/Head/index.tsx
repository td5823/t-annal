import React, { useEffect } from "react";
import { shallow } from "zustand/shallow";
import { Layout } from "antd";

import { storeHome } from "store/Home";

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
    <Layout.Header style={{ backgroundColor: "#ffffff" }}>
      123123123
    </Layout.Header>
  );
};

export default React.memo(Home);
