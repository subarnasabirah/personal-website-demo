import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AppFooter from './layout/footer';
import AppHeader from './layout/header';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';



const { Content } = Layout;

function App() {
    return (
            <Router>
                <div className="App">
                    <Content>
                    <AppHeader />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                    <AppFooter />
                    </Content>
                </div>
            </Router>
         
            
    );
}

export default App;