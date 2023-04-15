import React from 'react'

const Citas = () => {
  return (
    <div>
        <div className='consulta'>
        <h1 className='h1x'>Gestion de Citas</h1>
        <div className='div-label'>
          <label htmlFor="Documento" className='labelx'>N° Documento</label>
          <input />
          <button>Consultar</button>
        </div>
        <table >
          <tr>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Correo</th>
            <th>Accion</th>
          </tr>
          <tr>
            <td>Juan</td>
            <td>12/07/2023</td>
            <td>3:05 pm</td>
            <td>Juan@gmail.com</td>
            <td>
              <button>Agregar</button>              
            </td>
          </tr>
        </table>
    </div>
    </div>
  )
}

export default Citas