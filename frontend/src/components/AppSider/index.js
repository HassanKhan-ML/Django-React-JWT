import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LayoutOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AppSider = ({ history }) => {

  // style={{ backgroundColor: '#fff' }}
  return (
    <Sider collapsible  >
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={'1'} mode="inline">
        <Menu.Item key="1" icon={<DesktopOutlined />}>
          <Link to="/" />Home Page
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="General">
          <Menu.Item key="3">
            <Link to="/button" />Button
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/iconpage" />Icon</Menu.Item>
          <Menu.Item key="5">
            <Link to="/typography" />Typography
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<LayoutOutlined />} title="Layout">
          <Menu.Item key="6">
            <Link to="/divider" />Divider
          </Menu.Item>
          <Menu.Item key="7">
            <Link to="/grid" />DividerGrid
          </Menu.Item>
          <Menu.Item key="8">
            <Link to="/layoutpage" />Layout
          </Menu.Item>
          <Menu.Item key="9">
            <Link to="/spacepage" />
            Space</Menu.Item>
        </SubMenu>
        <Menu.Item key="10" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  )
};

export default AppSider;
