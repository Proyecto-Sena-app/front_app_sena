import React from 'react'
import '../styles/Sidebar.css'
import Foto from '../Images/foto.png'
import { NavLink } from 'react-router-dom'

const SidebarLinks = () => {
  return (
    <ul className='nav-list' >      
      <SidebarRoute to='/Inicio/RegistroPacientes' title='Registro Paciente'         icon='fas fa-clipboard-list' />
      <SidebarRoute to='/Inicio/RegistroHistoria'          title='Registro Historia'      icon='fas fa-users' />      
      <SidebarRoute to='/Inicio/ConsultaHc'        title='Consulta Historia Clinica' icon='fas fa-search' />
      <SidebarRoute to='/Inicio/citas'           title='Gestion de Citas'          icon='fas fa-sync-alt' />
      <SidebarRoute to='/Inicio/Pagos'             title='Gestion de Pagos'         icon='fas fa-file-invoice-dollar' />
    </ul>
  );
};


const SidebarRoute = ({ to, title, icon }) => {
  return (
    <li >
      <NavLink
        to={to}      
      >
        <div className=''>
          <i className={icon} />
          <span >{title}</span>
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
    
    <div className='sidebar'>
      <Logo/>
      <SidebarLinks/>
    </div>
  )
}

export default Sidebar