import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LayoutOutlined,
  MenuUnfoldOutlined,
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
        <SubMenu key="sub3" icon={<MenuUnfoldOutlined />} title="Navigation">
          <Menu.Item key="10">
            <Link to="/affix" />Affix
          </Menu.Item>
          <Menu.Item key="11">
            <Link to="/breadcrumb" />BreadcrumbPage
          </Menu.Item>
          <Menu.Item key="12">
            <Link to="/dropdown" />Dropdown
          </Menu.Item>
          <Menu.Item key="13">
            <Link to="/pageheader" />Page Header</Menu.Item>
          <Menu.Item key="14">
            <Link to="/pagination" />Pagination</Menu.Item>
          <Menu.Item key="15">
            <Link to="/steps" />Steps</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<MenuUnfoldOutlined />} title="Data Entry">
          <Menu.Item key="16">
            <Link to="/autocomplete" />Auto Complete
          </Menu.Item>
          <Menu.Item key="17">
            <Link to="/cascader" />Cascader
          </Menu.Item>
          <Menu.Item key="18">
            <Link to="/checkbox" />CheckBox
          </Menu.Item>
          <Menu.Item key="19">
            <Link to="/datepicker" />Date Picker
          </Menu.Item>
          <Menu.Item key="20">
            <Link to="/form" />Form</Menu.Item>
          <Menu.Item key="21">
            <Link to="/input" />Input</Menu.Item>
          <Menu.Item key="22">
            <Link to="/inputnumber" />Input Number</Menu.Item>
          <Menu.Item key="23">
            <Link to="/mentions" />Mention</Menu.Item>
          <Menu.Item key="24">
            <Link to="/radio" />Radio</Menu.Item>
          <Menu.Item key="25">
            <Link to="/rate" />Rate</Menu.Item>
          <Menu.Item key="26">
            <Link to="/select" />Select</Menu.Item>
          <Menu.Item key="27">
            <Link to="/sider" />Sider</Menu.Item>
          <Menu.Item key="28">
            <Link to="/switch" />Switch</Menu.Item>
          <Menu.Item key="29">
            <Link to="/timepicker" />Time Picker</Menu.Item>
          <Menu.Item key="30">
            <Link to="/transfer" />Transfer</Menu.Item>
          <Menu.Item key="31">
            <Link to="/treeselect" />Tree Select</Menu.Item>
          <Menu.Item key="32">
            <Link to="/upload" />Upload</Menu.Item>
        </SubMenu>
        <Menu.Item key="99" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  )
};

export default AppSider;
