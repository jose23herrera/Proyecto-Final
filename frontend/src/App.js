import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './componentes/Inicio';
import Login from './componentes/Login';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
