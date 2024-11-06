import './registro.css';

function Registro() {
  return (
    <div className="registro-container">
      <h2>Registro de Usuario</h2>
      <form className="registro-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellido</label>
          <input type="text" id="apellido" name="apellido" placeholder="Ingrese su apellido" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input type="email" id="email" name="email" placeholder="Ingrese su correo electrónico" />
        </div>
        <div className="form-group">
          <label htmlFor="ciudad">Ciudad</label>
          <input type="text" id="ciudad" name="ciudad" placeholder="Ingrese su ciudad" />
        </div>
        <div className="form-group">
          <label htmlFor="celular">Número de Celular</label>
          <input type="tel" id="celular" name="celular" placeholder="Ingrese su celular" />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña</label>
          <input type="password" id="contraseña" name="contraseña" placeholder="Ingrese su contraseña" />
        </div>
        <button type="submit" className="btn-submit">Registrar</button>
      </form>
    </div>
  );
}

export default Registro;
