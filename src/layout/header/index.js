import { Layout, Menu } from 'antd';
import React from 'react';
import './header.css';


const { Header } = Layout;

function AppHeader() {
    return (
        <div className="container-fluid">
            <Header style={{ backgroundColor: "#1e1e1e", color:"#bcb4b4" }}>
                <Menu  style={{ backgroundColor: "#1e1e1e", color:"#bcb4b4", border:"none" }} mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="blog">Blog</Menu.Item>
                    <Menu.Item key="contact">Contact</Menu.Item>
                    
                </Menu>
            </Header>
       </div>
    );
}

export default AppHeader;