import React from "react";
import "./Card.css";

function Card({ titulo, descricao }) {
  return (
    <div className="card">
      <h2 className="card-titulo">{titulo}</h2>
      <p className="card-descricao">{descricao}</p>
    </div>
  );
}

export default Card;
