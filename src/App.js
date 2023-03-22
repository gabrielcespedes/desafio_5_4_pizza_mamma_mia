import { useEffect, useState } from "react";

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
          Learn React    
    </div>
  );
}

export default App;
