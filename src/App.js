import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import './App.css';
import AppFooter from './layout/footer';
import AppHeader from './layout/header';
import Home from './pages/Home';



const { Content } = Layout;

function App() {
    return (
        <div className="App">
            <Content>
                <AppHeader />
                <Home />
                 <AppFooter />
            </Content>
        </div>
    );
}

export default App;