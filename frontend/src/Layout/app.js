import React from 'react';
import AppHeader from '../components/AppHeader';
import { Layout, Menu, Breadcrumb } from 'antd';
import AppSider from '../components/AppSider';

import AppContent from '../components/AppContent';
import ButtonPage from '../Pages/ButtonPage';
import LayoutRoutes from '../components/LayoutRoutes';
import HomePage from '../Pages/HomePage';
import Divider from '../Pages/DividerPage';
import Typography from '../Pages/Typography';
import IconPage from '../Pages/IconPage';
import DividerPage from '../Pages/DividerPage';
import GridPage from '../Pages/GridPage';
import LayoutPage from '../Pages/LayoutPage';
import SpacePage from '../Pages/SpacePage';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AppLayout = () => {

  const routes = [
    {
      exact: true,
      path: '/',
      component: HomePage
    },
    {
      path: '/button',
      component: ButtonPage
    },
    {
      path: '/iconpage',
      component: IconPage
    },
    {
      path: '/typography',
      component: Typography
    },
    {
      path: '/divider',
      component: DividerPage
    },
    {
      path: '/grid',
      component: GridPage
    },
    {
      path: '/layoutpage',
      component: LayoutPage
    },
    {
      path: '/spacepage',
      component: SpacePage
    },
  ];

  return (
    <>

      <Layout style={{ minHeight: '100vh' }} className="mainLayout">
        <AppSider />
        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
          {/* <AppContent routes={routes} /> */}
          <AppHeader />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Ant Design </Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <LayoutRoutes routes={routes} />
              {/* Ant Design Components */}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>

        </Layout>
      </Layout>
    </>
  )
}

export default AppLayout;