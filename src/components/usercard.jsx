import React from "react";
import "./usercard.css";
import profilePhoto from "../assets/image.png"

const Usercard = () => {
  const name = "Mohammed Shebin";
  const email = "shebin4444@example.com";
  const phone = "8909567777";
  const address = "church Main St, New York, USA";

  return (
    <div className="user-card">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
        <h2 className="user-name">{name}</h2>
        <p className="user-email">📧 {email}</p>
        <p className="user-phone">📞 {phone}</p>
        <p className="user-address">📍 {address}</p>
    </div>
  );
};

export default Usercard;
