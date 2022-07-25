import React from 'react';
import './App.css';
import { BrowserRouter as Router,NavLink,Routes,Route } from 'react-router-dom';

import Usuarios from './components/Usuarios/Usuarios'
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';
import Home from './components/Home/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><NavLink to='/'>Inicio</NavLink></li>
              <li><NavLink to='/usuarios'>Usuarios Cadastrados</NavLink></li>
              <li><NavLink to='/adicionar'>Adicionar Usuario</NavLink></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/usuarios' element={<Usuarios />}/>
            <Route path='/adicionar' element={<AdicionarUsuario />}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
          
        </main>
      </div>
    </Router>
  );
}

function PageNotFound(){
  return <>
  <h1>404</h1>
  <p>página não encontrada</p>
  </>
}

export default App;
