import React from 'react';
import './InfoCard.css';

function InfoCard({ title, text, linkText, linkTo, imageSrc }) {
  return (
    <div className="info-card">
      <div className="card-image-container">
        <img src={imageSrc} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <a href={linkTo} className="card-link">{linkText}</a>
      </div>
    </div>
  );
}

export default InfoCard;