import React, { useState } from "react";
import { Layout } from "antd";
import styled from "styled-components";

import Search from "./Search";
import Menu from "./Menu";

const StyledLayoutSider = styled(Layout.Sider)`
  height: 100%;
`;

const Sider = (): any => {
  const [width, setWidth] = useState(140);
  const [collapsed, setcollapsed] = useState(false);

  const handleCollapse = (toggle: boolean) => {
    setWidth(!toggle ? 140 : 51);
    setcollapsed(toggle);
  };

  return (
    <StyledLayoutSider
      collapsible
      width={width}
      // trigger={null}
      reverseArrow
      collapsed={collapsed}
      onCollapse={handleCollapse}
    >
      <Layout>
        <Search />
        <Menu />
      </Layout>
    </StyledLayoutSider>
  );
};

export default Sider;
