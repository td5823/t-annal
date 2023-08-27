import * as React from "react";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

import SiderMenu from "./SiderMenu";

import { storeHome } from "store/Home";

import "./index.less";

const Home = (): any => {
  const {
    menus,
    // getUserInfo,
    // userInfo,
    getMenuInfo,
    // getFavorites,
    // openTab,
    // closeTab,
    // showTour,
    // updateTab,
    // updatePageTab,
    // changeState,
  } = storeHome(
    (props: any): any => ({
      menus: props.menus,
      getMenuInfo: props.getMenuInfo,
    }),
    shallow
  );
  console.log("menus", menus);
  useEffect(() => {
    getMenuInfo();
  }, []); // eslint-disable-line

  return (
    <div className="t-layout">
      <div className="t-layout-sider">
        <SiderMenu />
      </div>
      <div className="t-layout" style={{ marginLeft: 200 }}>
        <div className="t-layout-header">
          1231231233333355555555555555555555555555555555555555555555555555
        </div>
        <div className="t-layout">
          <div className="t-layout-sider" />
          <div className="t-layout" />
        </div>
      </div>
    </div>
  );
};

export default Home;
