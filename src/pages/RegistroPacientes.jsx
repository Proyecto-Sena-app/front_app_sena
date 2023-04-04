import '../styles/RegistroPacientes.css'

const RegistroPacientes = () => {


    return(
        <div className="registro-pacientes">
            <div className="form-container-registro">
                <p className='title-registro-pacientes'>Registro pacientes</p>

                <form action="/" className="form-registro-pacientes" >
                    <div className='div-content'>
                        <label htmlFor="name" className="label-reg">Nombres:</label>
                        <input type="text" name="name" placeholder="Maria " className="input-reg input-name-reg"/>
                    </div>
                    
                    <div className='div-content'>   
                        <label htmlFor="surname" className="label-reg">Apellidos:</label>
                        <input type="text" name="surname" placeholder="Torres" className="input-reg input-surname-reg"/>
                    </div>
                    
                    <div className='div-content'>
                        <label htmlFor="document_type" className='label-reg'>Tipo de documento:</label>
                        <select name="document_type" id="document_type"required className='input-reg'>
                            <option value="CC">CC</option>
                            <option value="RC">RC</option>
                            <option value="TI">TI</option>
                            <option value="CE">CE</option>
                            <option value="PP">PP</option>
                        </select>
                    </div>
        
                    <div className='div-content'>
                        <label htmlFor="document_number" className="label-reg">Numero documento:</label>
                        <input type="text" name="document_number" placeholder="0123456789" className="input-reg input-address"/>
                    </div>
                    
                    <div className='div-content'>
                        <label htmlFor="date" className='label-reg'>Fecha Nacimiento:</label>
                        <input type="date" id="date" name="trip-start"value="2023-03-29" className='input-reg'></input>
                    </div>
        
                    <div className='div-content'>
                        <label htmlFor="address" className="label-reg">Dirección:</label>
                        <input type="text" name="address" placeholder="Kr 10 a" className="input-reg input-address"/>
                    </div>
                    
                    <div className='div-content'>
                        <label htmlFor="phone" className="label-reg">Telefono:</label>
                        <input type="text" name="phone" placeholder="310200200" className="input-reg input-address"/>
                    </div>                
                    
                    <div className='div-content'>
                        <label htmlFor="occupation" className="label-reg">Ocupacion:</label>
                        <input type="text" name="occupation" placeholder="Ingresa ocupacion" className="input-reg input-diagnostic"/>
                    </div>
        
                    <div className='div-buttons'>
                        <button className="secondary-button-reg button-cancel">Cancelar</button>
                        <button className="primary-button-reg">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistroPacientes