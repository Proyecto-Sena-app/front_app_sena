import React from 'react';
import '../../styles/Inicio.css'

const ConsultaHC = () => {
  return (
    <div className='consulta'>
        <h1 className='h1x'>Consulta Historia Clinica del Paciente</h1>
        <div className='div-label'>
          <label htmlFor="Documento" className='labelx'>N° de Documento</label>
          <input />
        </div>
        <table >
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Numero de Documento</th>
            <th>Correo</th>
            <th>Accion</th>
          </tr>
          <tr>
            <td>Juan</td>
            <td>Calvo</td>
            <td>12345</td>
            <td>Juan@gmail.com</td>
            <td>
              <button>Descargar</button>
              <button>Editar</button>
            </td>
          </tr>
        </table>
    </div>
  )
}

export default ConsultaHC