import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AppSider = ({ history }) => {


  return (
    <Sider collapsible >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          General
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Layout
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="General">
          <Menu.Item key="3">Button</Menu.Item>
          <Menu.Item key="4">Icon</Menu.Item>
          <Menu.Item key="5">Typography</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Layout">
          <Menu.Item key="6">Divider</Menu.Item>
          <Menu.Item key="7">Grid</Menu.Item>
          <Menu.Item key="8">Layout</Menu.Item>
          <Menu.Item key="9">Space</Menu.Item>
        </SubMenu>

        <Menu.Item key="10" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  )
};

export default AppSider;
