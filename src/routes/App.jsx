/*import logo from './logo.svg';
import './App.css';*/
import Login from '../pages/Login';
import Contacto  from '../pages/Contacto';
import Registro from '../pages/Registro';
/*import Sidebar from '../components/Sidebar';*/
import LayoutInicio from '../layout/LayoutInicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistroPacientes from '../pages/RegistroPacientes';
import ConsultaHC from '../pages/ConsultaHC';
import Layout from '../layout/Layout';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ='/' element ={<LayoutInicio />}>
        <Route path='' element ={<Login/>}/>
        <Route path ='/Contacto' element={<Contacto/>} />
      </Route>
      <Route path ='/' element={<Layout/>} />
        <Route path ='/registro'  element ={<Registro/>}/>
        <Route path ='/ConsultaHC' element ={<ConsultaHC/>}/>      
        <Route path ='/RegistroPacientes' element ={<RegistroPacientes/>}>
      </Route>
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
