import { Layout, Menu } from 'antd';
import React from 'react';
import './header.scss';


const { Header } = Layout;

function AppHeader() {
    return (
        <div className="container-fluid">
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="blog">Blog</Menu.Item>
                    <Menu.Item key="contact">Contact</Menu.Item>
                    
                </Menu>
            </Header>
       </div>
    );
}

export default AppHeader;