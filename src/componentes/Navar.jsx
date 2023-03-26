import React from 'react'
import { Outlet } from 'react-router-dom'
import '../styles/styles.css'

const Navar = () => {
  return (
    <div>
        <nav >
         <ul>
          <li><a href='Contacto'>Inicio</a></li>
          <li><a href='Contacto'>Sobre Nosotros</a></li>
          <li><a href='Contacto'>Contacto</a></li>
         </ul>  
        </nav>
        <Outlet/>
    </div>
  )
}

export default Navar