import React from 'react'
import '../styles/Sidebar.css'
import Foto from '../Images/foto.png'
import { NavLink } from 'react-router-dom'

const SidebarLinks = () => {
  return (
    <ul className='sidebar'>      
      <SidebarRoute to='/Registro' title='Registro' icon='fas fa-home' />
      <SidebarRoute to='/' title='Consulta Historia Clinica' icon='fas fa-smile-wink' />
      <SidebarRoute to='/category1' title='Gestion de Citas' icon='fab fa-amazon' />
      <SidebarRoute to='/category1/page1' title='Consulta de Pagos' icon='fas fa-car' />
      <SidebarRoute to='/category1/page1' title='Registro de usuarios' icon='fas fa-car' />
    </ul>
  );
};


const SidebarRoute = ({ to, title, icon }) => {
  return (
    <li>
      <NavLink
        to={to}
      
      >
        <div className=''>
          <i className={icon} />
          <span className='text-sm  ml-2'>{title}</span>
        </div>
      </NavLink>
    </li>
  );
};
const Logo = () => {
  return (
    <div >
      <img className='img-profile' src={Foto} alt=""/>
      {/*<span className='my-2 text-xl font-bold text-center'>Título de Mi Aplicación</span>-->*/}
    </div>
  );
};
const Sidebar = () => {
    
 
  return (
    /*<div id='container-sidebar' className='sidebar inactive'>
      <img className='img-profile' src={Foto} alt="" />
      <i onClick={handleClick} className='bx bx-menu btn'></i>
      <ul className='nav-list'>
        <li>
          
          <a href="/RegistroPaciente">
            <i class='bx bx-notepad'></i>
            Registro paciente 
          </a>
        </li>

        <li>
          <a href="/">
          <i class='bx bxs-file-plus'></i>

            Registro Historia Clinica
          </a>
        </li>

        <li>
          <a href="/">
            <i class='bx bxs-file-find'></i>
            Consulta Historia Clinica
          </a>
        </li>

        <li>
          <a href="/">
            <i class='bx bx-calendar' ></i>
            Gestion Citas
          </a>
        </li>

        <li>
          <a href="/">
            <i class='bx bx-money-withdraw'></i>
            Pagos
          </a>
        </li>
      </ul>
    </div>*/
    <div className='contenedor'>
      <Logo/>
      <SidebarLinks/>
    </div>
  )
}

export default Sidebar