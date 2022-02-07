import React from 'react';
import ContactSection from '../components/contact/ContactSection';
import Map from '../components/contact/map';

export default function Contact() {
  return (
    <div className="contact-page">
     <ContactSection />
      <Map />
    </div>
  );
}