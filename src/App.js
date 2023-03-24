import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useEffect, useState } from "react";

import MyContext from "./my_context";

import Navbar from "./components/Navbar";

import Home from './views/Home';
import Carrito from './views/Carrito';
import Pizza from './views/Pizza';


function App() {
  
  const endpoint = "/pizzas.json";
  const [pizzas, setPizzas] = useState([]);
  const estadoCompartido = {pizzas};

  useEffect(() => {
    dataPizzas();
  }, [])

  const dataPizzas = async () => {
    const responseData = await fetch(endpoint);
    const dataPizzas = await responseData.json();
    setPizzas([...dataPizzas]);
  }

  return (        
    <MyContext.Provider value={estadoCompartido}>
      <BrowserRouter>
        <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/pizza/:id' element={<Pizza></Pizza>}></Route>
            <Route path='/carrito' element={<Carrito></Carrito>}></Route>
          </Routes>        
      </BrowserRouter>      
    </MyContext.Provider>   
  );
}

export default App;
