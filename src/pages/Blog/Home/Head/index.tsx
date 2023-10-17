import React from "react";
import { Layout } from "antd";
import styled from "styled-components";

import Menu from "./Menu";

const StyledHeader = styled(Layout.Header)`
  background: hsla(0, 0%, 100%, 0);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border: none;
`;

const Home = () => {
  return (
    <StyledHeader>
      <Menu />
    </StyledHeader>
  );
};

export default Home;
