import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom'
import React from 'react';

const { Header, Content, Footer } = Layout;

const Home = (props) => {
  return <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </Header>
    <Content
      style={{
        padding: '0 50px',
        height: '100%'
      }}
    >
      <Outlet />
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
}

export default Home;