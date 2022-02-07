import React from 'react';
import CallIcon from '../../assets/images/cl.png';
import LocationIcon from '../../assets/images/loc1.png';
import MailIcon from '../../assets/images/mail.png';
import './contact.css';
import ContactForm from './ContactForm';



export default function ContactSection() {
  return (
    <div className="contact__styled">
      <p className="contact__subtitle">get in touch</p>
      <h2 className="contact__title">Contact</h2>
      <div className="contactSection__wrapper">
        <div className="left">
          <div className="contact__icon">
            <div className="icon">
              <img src={CallIcon} alt="call-img" className="call__icon" />
            </div>
            <div className="info">
              <p className="p__text">+8801704031170</p>
            </div>
          </div>
          <div className="contact__icon">
            <div className="icon">
              <img src={MailIcon} alt="mail-img" className="call__icon" />
            </div>
            <div className="info">
              <p className="p__text">subarna769@gmail.com</p>
            </div>
          </div>
          <div className="contact__icon">
            <div className="icon">
              <img src={LocationIcon} alt="location-img" className="call__icon" />
            </div>
            <div className="info">
              <p className="p__text">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <div className="right">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
