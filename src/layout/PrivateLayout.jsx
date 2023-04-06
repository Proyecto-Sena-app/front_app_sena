import React from 'react';
import { Outlet } from 'react-router-dom'
import Navbar  from "../components/Navbar";
import Sidebar from '../components/Sidebar';
import '../styles/private.css'

const PrivateLayout = () => {
  return (
    <div className='private'>
        <Sidebar/>
        <Navbar/>        
        <Outlet/>
    </div>
  )
}

export default PrivateLayout