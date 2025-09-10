import React from "react";
import Card from "./components/Card"; // garante que o caminho está certo!

function App() {
  return (
    <div>
      <h1>Meus Cards</h1>
      <Card titulo="Primeiro Card" descricao="Essa é a descrição do primeiro card." />
      <Card titulo="Segundo Card" descricao="Aqui vai outro card com informações diferentes." />
    </div>
  );
}

export default App;
