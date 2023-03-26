import React from 'react'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <div>Este el navbar
        <Outlet/>
        <footer>Es es el footer</footer>
    </div>
    
  )
}

export default layout