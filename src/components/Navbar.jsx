import React from 'react'
import Logo from '../Images/logo.png'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>      
      <div className='navbar-right'>
        <ul>
          <li className='navbar-report'><a href=''>Generar reporte</a></li>
          <li className="navbar-profile"><a href=''>Maria Torres</a></li>
        </ul> 
      </div>
    </nav>
  )
}

export default Navbar