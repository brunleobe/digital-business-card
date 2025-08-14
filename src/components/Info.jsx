import React from "react";
import profilePic from "../assets/IMG_9750.jpg"; // change filename if needed

export default function Info() {
  return (
    <div className="info">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1>Bright Obende</h1>
      <h3 className="role">Frontend Developer</h3>
      
      <div className="buttons">
        <a href="mailto:brightobende11@gmail.com" className="email-btn" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-envelope"></i> Email</a>
      </div>
    </div>
  );
}
