import React from 'react';
import Tarefa from './components/Tarefa';
import './App.css'; 

function App() {
  const listaDeTarefas = [
    { id: 1, titulo: 'Configurar ambiente de desenvolvimento', responsavel: 'Ítalo', concluida: true },
    { id: 2, titulo: 'Criar componente Tarefa', responsavel: 'Josivaldo', concluida: true },
    { id: 3, titulo: 'Estilizar componente com CSS', responsavel: 'Paulo Vitor', concluida: false },
    { id: 4, titulo: 'Adicionar estado para interatividade', responsavel: 'Hermogens', concluida: false },
    { id: 5, titulo: 'Fazer deploy do projeto', responsavel: 'Ermeson', concluida: false },
  ];

  return (
    <div className="app-container">
      <h1>Lista de Tarefas</h1>
      <div className="tarefas-lista">
        {}
        {listaDeTarefas.map(tarefa => (
          <Tarefa
            key={tarefa.id} 
            titulo={tarefa.titulo}
            responsavel={tarefa.responsavel}
            concluida={tarefa.concluida}
          />
        ))}
      </div>
    </div>
  );
}

export default App;