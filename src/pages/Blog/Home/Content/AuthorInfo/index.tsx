import React from "react";
import { UserOutlined, createFromIconfontCN } from "@ant-design/icons";
import { Card, Layout, Space } from "antd";

const { Meta } = Card;

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const AuthorInfo: React.FC = () => (
  <Card
    hoverable
    cover={
      <img
        alt="example"
        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        style={{ height: 200, objectFit: "contain" }}
      />
    }
    bodyStyle={{
      padding: 0,
    }}
  >
    <Meta
      avatar={<UserOutlined />}
      title="Europe Street beat"
      description="www.instagram.com"
    />
    <Layout.Footer style={{ padding: 12 }}>
      <Space>
        <IconFont type="icon-tuichu" />
        <IconFont type="icon-facebook" />
        <IconFont type="icon-twitter" />
      </Space>
    </Layout.Footer>
  </Card>
);

export default AuthorInfo;
