import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header } = Layout;


const AppHeader = ({ history }) => {


  return (
    // <Header className="" >
      <Menu  theme="" mode="horizontal" defaultSelectedKeys={['']}>
        <Menu.Item key="1">Design</Menu.Item>
        <Menu.Item key="2">Doc</Menu.Item>
        <Menu.Item key="3">Components</Menu.Item>
      </Menu>
    // </Header>
  )
};

export default AppHeader;
