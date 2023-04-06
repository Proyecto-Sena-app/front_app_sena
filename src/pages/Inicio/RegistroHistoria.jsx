import React from 'react'
/*import '../../styles/RegistroHistoria.css'*/

const RegistroHistoria = () =>{
    return(
        <div className='registro-historia'>
            <div className='container-registro-historia'>
                <div>
                    <p className='title-registro-historia'>Registro Historia Clinica</p>
                </div>  
                
                    <div className='container-search container'>
                        <label htmlFor="search" className='label-reg-his'>Documento de identidad:</label>
                        <input type="number" name="search"  className='input-reg' id="search" placeholder='Buscar'/>

                        <button className='button-search'><i class='bx bx-search'></i></button>
                    </div>

                    <div className=' container-info'>
                        <p>Nombres:</p>
                        <p>Apellidos:</p>
                        <p>Edad:</p>
                        <p>Numero documento:</p>
                        <p>Correo:</p>
                        <p>Diagnostico:</p>
                    </div>
                    <div className='container container-info-med'>
                        <div>
                            <label htmlFor="" className='label-reg-his'>Valoracion medica</label>
                            <textarea name="" id="" cols="30" rows="10"className='input-reg'></textarea>
                        </div>
                        
                        <div>
                            <label htmlFor="" className='label-reg-his'>Sesiones  recomendadas</label> 
                            <input type="number"className='input-reg'/>
                        </div>
                        
                    </div>
                    <div className='container-buttons'>
                        <div className='container'>
                            <button className='secondary-button-reg'>Anexo</button>
                            <button className='secondary-button-reg'>Evolución</button>
                        </div>
                        <div className='container'>
                            <button className='primary-button-reg'>Guardar</button>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default RegistroHistoria