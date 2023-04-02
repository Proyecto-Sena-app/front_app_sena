/*import logo from './logo.svg';
import './App.css';*/
import Login from '../pages/Login';
import Contacto  from '../pages/Contacto';
import Registro from '../pages/Registro';
import Sidebar from '../components/Sidebar';
import LayoutInicio from '../layout/LayoutInicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ='/' element ={<LayoutInicio />}>
        <Route path='/login' element ={<Login/>}/>
        <Route path ='/Contacto' element={<Contacto/>} />
      </Route>
      <Route path ='/sidebar' element={<Sidebar/>} />
      <Route path ='/registro' element ={<Registro/>}/>
      <Route path ='/navbar' element ={<Navbar/>}>

             
      </Route>
    </Routes> 
    </BrowserRouter>
       
    
  );
}

export default App;
