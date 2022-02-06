import React from 'react';
import HomeBg from '../assets/images/bg.jpg';
import AboutSection from '../components/home/AboutSection';
import HeroSection from '../components/home/HeroSection';
import './Home.css';


export default function Home() {
  return (
    <div className="home">
      <div className="background-overlay" style={{ backgroundImage:`url(${HomeBg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition: "50%", backgroundColor: "#010101", height: "500px",position: "relative"}}>
        <HeroSection />
      </div>
       <AboutSection />
    </div>
  );
}