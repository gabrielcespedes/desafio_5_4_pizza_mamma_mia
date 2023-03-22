import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from "react";

import MyContext from "./my_context";

import Navbar from "./components/Navbar";

function App() {
  
  const endpoint = "/pizzas.json";
  const [pizza, setPizzas] = useState([]);
  const estadoCompartido = {pizza, setPizzas};

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
      <Navbar></Navbar>
    </MyContext.Provider>   
  );
}

export default App;
