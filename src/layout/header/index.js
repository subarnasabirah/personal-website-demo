import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';


const { Header } = Layout;

function AppHeader() {
    return (
        <div className="container-fluid">
            <Header style={{ backgroundColor: "#1e1e1e", color:"#bcb4b4" }}>
                <Menu  style={{ backgroundColor: "#1e1e1e", color:"#bcb4b4", border:"none" }} mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item key="blog"><Link to="/blog">Blog</Link></Menu.Item>
                    <Menu.Item key="contact"><Link to="/contact">Contact</Link></Menu.Item>
                    
                </Menu>
            </Header>
       </div>
    );
}

export default AppHeader;