import React from 'react'
import '../styles/login.css'

const Index = () => {
  return (
    <div >
      <body>
        <div id="contenedor">
          <div id='contenedorcentrado'>
            <div id="loginform">
              <form id="login">
                        <label for="usuario">Usuario</label>
                        <input id="usuario" type="text" name="usuario" placeholder="Usuario" required=""/>
                        
                        <label for="password">Contraseña</label>
                        <input id="password" type="password" placeholder="Contraseña" name="password" required=""/>
                        
                        <button type="submit" title="Ingresar" name="Ingresar">Login</button>
               </form>
              
            </div>
            <div id="derecho">
              <div class="titulo"> Bienvenido </div>
              <hr/>
              <div class="pie-form">
                <a href="test">¿Perdiste tu contraseña?</a>
                <a href="test">¿No tienes Cuenta? Registrate</a>
                <hr/>
                <a href="test">« Volver</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}

export default Index