import { Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom'
import React from 'react';

import Page from 'components/Page'

const { Header, Footer } = Layout;

const Home = (props) => {
  return <Page className="layout">
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
    <Page
      style={{
        padding: '0 50px',
        height: '100%'
      }}
    >
      <Outlet />
    </Page>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Page>
}

export default Home;