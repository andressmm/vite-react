import './login.css';

function Login() {
  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" placeholder="Ingrese su correo electrónico" required />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña</label>
          <input type="password" id="contraseña" name="contraseña" placeholder="Ingrese su contraseña" required />
        </div>
        <button type="submit" className="btn-submit">Iniciar Sesión</button>
        <div className="form-links">
          <a href="/registro">¿No tienes cuenta? Regístrate</a>
          <a href="/recuperar-contrasena">¿Olvidaste tu contraseña?</a>
        </div>
      </form>
    </div>
  );
}

export default Login;
