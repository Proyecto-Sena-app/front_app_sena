/*import logo from './logo.svg';
import './App.css';*/
import Index from './pages/Index';
import Contacto  from './pages/Contacto';
import IndexRegistro from './pages/registro/IndexRegistro';
import Layout from './layout/Layout';
import LayoutInicio from './layout/LayoutInicio';
import './Images/fondo_difuminado_login.jpg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ='/' element ={<LayoutInicio />}>
        <Route path='' element ={<Index/>}/>
        <Route path ='/Contacto' element={<Contacto/>} />
      </Route>
      
      <Route path ='/registro' element ={<Layout/>}>
        <Route path ='' element={<IndexRegistro/>} />     
      </Route>
    </Routes> 
    </BrowserRouter>
       
    
  );
}

export default App;
