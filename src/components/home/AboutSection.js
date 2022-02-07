import React from 'react';
import AboutImg from '../../assets/images/a2.jpg';
import './about.css';

export default function AboutSection() {
  return (
    <div className="about component__space">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <p className="introduce__text">Let me introduce myself</p>
             <h1 className="about_title">About Me</h1>
            <div className="about_meta">
              <p className="p_text">I am from Tangail, Bangladesh. A place of beauty and nature. Since my childhood, i love art and design. I always
                try to design stuff with my unique point of view. I also love to create things that can be usefull to others.</p>
              <p className="p_text"> I started coding since I was in high school. Coding is also an art for me. I love it and now I have the opportunity to design along with the coding. I find it really interesting and I enjoyed the process a lot.</p>
              <p className="p_text">My vision is to make the world a better place. Now almost everything is becoming better than ever. It is time for us to create more good stuff that helps the world to become a better place.</p>
              <div className="about__button d__flex align__items__center">
                <a href="# "><button className="about btn pointer">Download CV</button></a>
              </div>
            </div>
          </div>
          <div className="col__2">
            <div className="about__img">
              <img src={AboutImg} alt="about-img" className="a__img" />
            </div>
          </div> 
        </div>
      </div>
      
    </div>
  );
}