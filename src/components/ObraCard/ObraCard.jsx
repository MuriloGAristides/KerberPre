import React from 'react';
import './ObraCard.css';

const ObraCard = ({ imagem, titulo, local }) => {
  return (
    <div className="obra-card">
      <img src={imagem} alt={titulo} className="obra-card-imagem" />
      <div className="obra-card-overlay">
        <h3 className="obra-card-titulo">{titulo}</h3>
        <p className="obra-card-local">{local}</p>
      </div>
    </div>
  );
};

export default ObraCard;