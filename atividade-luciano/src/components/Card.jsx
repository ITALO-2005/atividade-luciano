import React from 'react';
import './Card.css';

/**
 * Componente Card que exibe um título e uma descrição.
 * @param {{titulo: string, descricao: string}} props - As propriedades do componente.
 */
const Card = ({ titulo, descricao }) => {
  return (
    <div className="card-container">
      <h3 className="card-titulo">{titulo}</h3>
      <p className="card-descricao">{descricao}</p>
    </div>
  );
};

export default Card;