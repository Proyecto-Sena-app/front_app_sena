/*import logo from './logo.svg';
import './App.css';*/
import Login from '../pages/Authe/Login';
import Contacto  from '../pages/Authe/Contacto';
import Registro from '../pages/Inicio/Registro';
import LayoutInicio from '../layout/LayoutInicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistroPacientes from '../pages/Inicio/RegistroPacientes';
import RegistroHistoria from '../pages/Inicio/RegistroHistoria';
import ConsultaHC from '../pages/Inicio/ConsultaHC';
import PrivateLayout from '../layout/PrivateLayout';
import Index from '../pages/Inicio/Index';

function App() {
  return (
    <BrowserRouter>
    <Routes>    
      <Route path ='/' element ={<LayoutInicio />}>
        <Route path='' element ={<Login/>}/>
        <Route path ='/Contacto' element={<Contacto/>} />
      </Route>
      <Route path='/Inicio' element ={<PrivateLayout/>}>
       <Route path=''                  element = {<Index/>}/>
        <Route path='RegistroPacientes' element = {<RegistroPacientes/>}/>
        <Route path='RegistroHistoria' element = {<RegistroHistoria/>}/>
        <Route path='ConsultaHc'       element = {<ConsultaHC/>}/>
        <Route path='Registro'         element = {<Registro/>}/>   
      </Route>    
      
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
