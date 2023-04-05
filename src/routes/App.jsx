/*import logo from './logo.svg';
import './App.css';*/
import Login from '../pages/Login';
import Contacto  from '../pages/Contacto';
import Registro from '../pages/Registro';
import Sidebar from '../components/Sidebar';
import LayoutInicio from '../layout/LayoutInicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistroPacientes from '../pages/RegistroPacientes';
import ConsultaHC from '../pages/ConsultaHC';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ='/' element ={<LayoutInicio />}>
        <Route path='' element ={<Login/>}/>
        <Route path ='/Contacto' element={<Contacto/>} />
      </Route>
      <Route path ='/sidebar' element={<Sidebar/>} />
        <Route path ='/registro'  element ={<Registro/>}/>
        <Route path ='/ConsultaHC' element ={<ConsultaHC/>}/>      
        <Route path ='/registro-paciente' element ={<RegistroPacientes/>}>
      </Route>
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
