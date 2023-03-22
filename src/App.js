import { useEffect, useState } from "react";

import MyContext from "./my_context";

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
    <div>
      <h1>React</h1>      
      <MyContext.Provider value={estadoCompartido}>
      </MyContext.Provider>    
    </div>
  );
}

export default App;
