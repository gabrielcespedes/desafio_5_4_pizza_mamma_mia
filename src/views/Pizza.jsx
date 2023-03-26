import { useParams } from "react-router-dom";

import { useContext } from "react";
import MyContext from "../my_context";

const Pizza = () => {
    const {id} = useParams();

    console.log(id)

    const {pizzas} = useContext(MyContext);

    console.log(pizzas)

    const selectedPizza = pizzas[pizzas.findIndex((element) => element.id === id)] 
    console.log(selectedPizza);

    return(
        <div className="d-flex justify-content-center">
            <div className="card m-4">
                <div className="card_interior">
                    <img src={selectedPizza.img} width="300" alt='imagen pizza' className="m-auto ms-4"></img>
                    <div className="box2">
                        <h1 className="text-dark">{selectedPizza.name[0].toUpperCase() + selectedPizza.name.slice(1)}</h1>
                        <hr></hr>
                        <p className="text-dark">{selectedPizza.desc}</p>
                        <h6 className="text-dark">Ingredientes:</h6>
                        <ul>
                            {selectedPizza.ingredients.map(
                                (e, index) => (<p key={index}>🍕 {e}</p>)
                            )}
                        </ul>                        
                        <div className="d-flex justify-content-between">
                            <h3 className="text-dark">Precio: ${selectedPizza.price}</h3>
                            <button className='btn btn-danger'>Añadir 🛒</button>
                        </div>                        
                    </div>                    
                </div>                
            </div>            
        </div>        
    )
}

export default Pizza;