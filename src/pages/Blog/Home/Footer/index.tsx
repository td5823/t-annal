import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background: hsla(0, 0%, 100%, 0);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border: none;
  height: 100px;
  background-color: red;
`;

const Footer = () => {
  return <StyledFooter>123123123</StyledFooter>;
};

export default Footer;
