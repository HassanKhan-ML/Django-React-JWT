import React from 'react';
import AppHeader from '../components/AppHeader';
import { Layout, Menu, Breadcrumb } from 'antd';
import AppSider from '../components/AppSider';

import AppContent from '../components/Content';
import AppButton from '../Pages/Button';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const AppLayout = () => {

  const routes = [
    {
      exact: true,
      path: '/',
      // component: FormList
    },
    {
      path: '/button',
      component: AppButton
    },
    {
      path: '/notes/:id',
      // component: FormIdData
    },
    {
      path: '/register',
      // component: Register
    },
    // {
    //   path: '/logout',
    //   component: Logout
    // },
  ];

  return (
    <>
    
    <Layout style={{ minHeight: '100vh' }}>
        <AppSider />
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
         <AppContent />

          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    
        </Layout>
      </Layout>
      </>
    )
}

export default AppLayout;