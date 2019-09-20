import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import logo2 from './image2.png';

const { Header, Content, Footer } = Layout;

const Layout1 = (props) => {
    return (
        <Layout className="layout">
        <body background={logo2}>
        <Header  style={{color: "blue"}}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        style={{lineHeight: '64px' }}
      >
        <Menu.Item key="4"><Link to='/'>IMAN</Link></Menu.Item>
        <Menu.Item key="1"><Link to='/home'>Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/events'>Events</Link></Menu.Item>
        <Menu.Item key="3"><Link to='/articles'>Articles</Link></Menu.Item>
      </Menu>
    </Header>
    <div style={{ padding: '0 50px',margin: '16px 0'}}>
      
      <div style={{ padding: 24, minHeight: 280 }}>
        {props.children}
      </div>
    </div>
    <Footer style={{ textAlign: 'center' }}>IMAN ©2019 Created by Muchengeti Matinde</Footer>
        </body>
    
  </Layout> 
    );
}

export default Layout1;
  
