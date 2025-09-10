import React from 'react';
import Card from './components/Card';

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }}>
      <Card
        titulo="Componente React"
        descricao="Este é um exemplo de um card simples criado com React. Props são usadas para passar dados dinamicamente."
      />
      <Card
        titulo="Estilização com CSS"
        descricao="O estilo do card é definido em um arquivo CSS separado, mantendo a estrutura e a aparência desacopladas."
      />
      <Card
        titulo="Reutilização"
        descricao="Este componente pode ser reutilizado em qualquer lugar da aplicação com diferentes títulos e descrições."
      />
    </div>
  );
}

export default App;