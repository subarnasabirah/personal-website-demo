import React from 'react';
import MapImg from '../../assets/images/map1.jpg';
import './contact.css';



export default function Map() {
  return (
    <div className="m-style" style={{ backgroundImage:`url(${MapImg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", backgroundPosition: "center", backgroundColor: "#010101", minHeight: "400px", position: "relative" }}>
      <div className="container">
        <div className="m-card">
          <h3 className="m-card-heading">Here is me</h3>
          <p className="p-text">East Raja Bazar, Dhaka, Bangladesh</p>
          <a
            className="m-card-link"
            href="https://www.google.com/maps/place/East+Raja+Bazar+Jame+Masjid/@23.7536732,90.3858315,19z/data=!4m5!3m4!1s0x3755b8a508bc26b3:0xce0d5be2b94d5b8d!8m2!3d23.7535566!4d90.3859585"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
    </div>
  );
}
