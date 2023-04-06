import React from 'react'

const Pagos = () => {
  return (
    <div>
        <div className='consulta'>
        <h1 className='h1x'>Gestion de pagos</h1>
        <div className='div-label'>
          <label htmlFor="Documento" className='labelx'>N° Recibo</label>
          <input />
          <button>Consultar</button>
        </div>
        <table >
          <tr>
            <th>Nombre</th>
            <th>Monto</th>
            <th>Numero de Recibo</th>
            <th>Correo</th>
            <th>Accion</th>
          </tr>
          <tr>
            <td>Juan</td>
            <td>Calvo</td>
            <td>12345</td>
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

export default Pagos