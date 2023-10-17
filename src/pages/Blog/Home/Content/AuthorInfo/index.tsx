import React from "react";
import { UserOutlined, createFromIconfontCN } from "@ant-design/icons";
import { Avatar, Space, Layout } from "antd";

import styled from "styled-components";

const StyledLayout = styled(Layout)`
  width: 100%;
  height: 280px;
  background-color: #fff;
`;

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const AuthorInfo = () => {
  return (
    <StyledLayout>
      <Layout.Header
        className="flex flex-middle"
        style={{ backgroundColor: "#fff" }}
      >
        <Avatar
          size={{ xs: 40, sm: 64, md: 64, lg: 64, xl: 64, xxl: 64 }}
          icon={<UserOutlined />}
        />
      </Layout.Header>
      <Layout.Content>
        <Space>
          <div>
            <div>文章</div>
            <div>23</div>
          </div>
          <div>
            <div>标签</div>
            <div>12</div>
          </div>
        </Space>
      </Layout.Content>
      <Layout.Footer>
        <Space>
          <IconFont type="icon-tuichu" />
          <IconFont type="icon-facebook" />
          <IconFont type="icon-twitter" />
        </Space>
      </Layout.Footer>
    </StyledLayout>
  );
};

export default AuthorInfo;
