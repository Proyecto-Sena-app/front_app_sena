import React from 'react'
import { Outlet } from 'react-router-dom'
import Navar from '../componentes/Navar'

const LayoutInicio = () => {
  return (
    <div>
      <Navar/>      
      <Outlet/>
    </div>
  )
}

export default LayoutInicio