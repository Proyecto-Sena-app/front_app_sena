import React from 'react'
import '../styles/Registro.css'
import Logo from '../Images/logo.png'

const Registro = () => {
  return (
    
    <div className="registre">  
      <div className="form-container-registre">
        <img src={Logo} alt="logo" className="logo-registre"/>
        <p className='title-registre'>Registrate</p>
          <form action="/" className="form-registre">

            <label htmlFor="name" className="label">Nombre</label>
            <input type="text" name="name" placeholder="Maria" className="input input-name-registre"/>

            <label htmlFor="surname" className="label">Apellido</label>
            <input type="text" name="surname" placeholder="Torres" className="input input-surname-registre"/>

            <label htmlFor="email" className="label">Correo electrónico</label>
            <input type="text" name="email" placeholder="example@example.com" className="input input-email-registre"/>

            <label htmlFor="password" className="label">Contraseña</label>
            <input type="password" name="password" placeholder="*********" className="input input-password-registre"/>

            <label htmlFor="password" className="label">Confirme contraseña</label>
            <input type="password" name="password" placeholder="*********" className="input input-password-registre"/>

            <button className="primary-button registre-button">Crear cuenta</button>

            <a href="/">Ya tienes cuenta? Inicia sesion</a>
          </form>

      </div> 
    </div>
  )
}

export default Registro