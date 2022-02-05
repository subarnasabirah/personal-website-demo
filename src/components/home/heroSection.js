import React from 'react';
import HeroImg from '../assets/images/hero.png';
import './hero.css';

export default function HeroSection() {
    return (
   
        <div className="hero">
            <div className="container">
                <h1 className="hero__heading">
                    <span>Hello, This is</span>
                    <span className="hero__name">Name</span>
                </h1>
                <div className="hero__img">
                    <img src={HeroImg} alt="" />
                </div>
                <div className="hero__info">
                    <p>
                        I am working as a front-end web developer for last 1
                        year. I love to development and make new web experiences for the
                        people.
                    </p>
                    <Button btnText="Contact Us" btnLink="/projects" />
                </div>
            </div>
        </div>
    );
}