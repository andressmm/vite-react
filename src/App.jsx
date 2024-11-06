import { useState } from 'react';
import './App.css';
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/header/header.jsx';
import Footer from './componentes/footer/footer.jsx';
import ListaProductos from './componentes/productos.jsx';
import Registro from './componentes/registro/registro.jsx'; 
import Login from './componentes/login/login.jsx'; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ListaProductos />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
