import './estilo.css';

function Header() {
  return (
    <header className="encabezado">
      <h1 className="titulo">TIENDA DE ELECTRONICA</h1>
      <nav className="navegacion">
        <a href="/" className="nav-button">Home</a>
        <a href="/registro" className="nav-button">Registro</a>
        <a href="/login" className="nav-button">Login</a>
      </nav>
    </header>
  );
}

export default Header;
