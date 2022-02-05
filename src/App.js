import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import './App.scss';
import AppFooter from './layout/footer';
import AppHeader from './layout/header';


function App() {
    return (
        <div className="App">
            <Layout className="layout">
                <AppHeader />
                <AppFooter />
            </Layout>
        </div>
    );
}

export default App;