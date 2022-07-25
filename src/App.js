import React from 'react';
import './App.css';

import Usuarios from './components/Usuarios/Usuarios'

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href='/'>Inicio</a></li>
            <li><a href='/usuarios'>Usuarios Cadastrados</a></li>
            <li><a href='/adicionar'>Adicionar Usuario</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Usuarios />
      </main>
    </div>
  );
}

export default App;
