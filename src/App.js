import { Layout } from 'antd';
import React from 'react';
import './App.css';
import AppFooter from './layout/footer';
import AppHeader from './layout/header';

const { Content } = Layout;


function App() {
    return (
        <div className="App">
            <Layout className="layout">
                <AppHeader />
                 <Content>
                    <div className="site-layout-content">
                        <Home />
                    </div>
                </Content>
                <AppFooter />
            </Layout>
        </div>
    );
}

export default App;