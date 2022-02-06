import React from 'react';
import './cbanner.css';

export default function ContactBanner() {
    return (
        <div className="contact__banner__style">
            <div className="contactBanner__wrapper">
                <p className="project__mind">Have a project in mind</p>
                <h3 className="contactBanner__heading">Let me help you</h3>
                <div className="about__button  align__items__center">
                    <a href="javascript: "><button className="about btn pointer">Contact Now</button></a>
                </div>
            </div>
        </div>
    );
}