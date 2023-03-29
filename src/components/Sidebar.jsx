import React from 'react'
import '../styles/Sidebar.css'
import Foto from '../Images/foto.png'

const Sidebar = () => {
    
  const handleClick = () =>{
    
  }
  return (
    <div id='container-sidebar' className='sidebar inactive'>
      <img className='img-profile' src={Foto} alt="" />
      <i onClick={handleClick} className='bx bx-menu btn'></i>
      <ul className='nav-list'>
        <li>
          <a href="">
            <i class='bx bx-notepad'></i>
            Registro usuario 
          </a>
        </li>

        <li>
          <a href="">
          <i class='bx bxs-file-plus'></i>

            Registro Historia Clinica
          </a>
        </li>

        <li>
          <a href="">
            <i class='bx bxs-file-find'></i>
            Consulta Historia Clinica
          </a>
        </li>

        <li>
          <a href="">
            <i class='bx bx-calendar' ></i>
            Gestion Citas
          </a>
        </li>

        <li>
          <a href="">
            <i class='bx bx-money-withdraw'></i>
            Pagos
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar