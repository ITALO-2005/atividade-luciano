import React from 'react';
import './Tarefa.css'; 

function Tarefa({ titulo, responsavel, concluida }) {
  const cardClassName = `tarefa-card ${concluida ? 'concluida' : ''}`;

  return (
    <div className={cardClassName}>
      <h3>{titulo}</h3>
      <p>Responsável: {responsavel}</p>
      <p className="status">
        Status: {concluida ? 'Concluída ✔️' : 'Pendente ⏳'}
      </p>
    </div>
  );
}

export default Tarefa;