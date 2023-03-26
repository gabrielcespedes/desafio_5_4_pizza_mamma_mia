import { useParams } from "react-router-dom";

import { useContext } from "react";

import MyContext from "../my_context";

const Pizza = () => {
    const {id} = useParams();

    console.log(id)

    const {pizzas} = useContext(MyContext);

    console.log(pizzas)

    const selectedPizza = pizzas.filter((element) => {
        if (element.id === id) {
            return element;
        }
    })
    console.log(selectedPizza);

    return(
        <div className="d-flex justify-content-center">
            <div className="card m-4">
                <div className="card_interior">
                    <img src={selectedPizza[0].img} width="300" height="300" alt='imagen pizza' className="m-auto ms-4"></img>
                    <div className="box2">
                        <h1 className="text-dark">{selectedPizza[0].name}</h1>
                        <hr></hr>
                        <p className="text-dark">{selectedPizza[0].desc}</p>
                        <h6 className="text-dark">Ingredientes:</h6>
                        <ul>
                            {selectedPizza[0].ingredients.map(
                                (e, index) => (<p key={index}>🍕 {e}</p>)
                            )}
                        </ul>                        
                        <div className="d-flex justify-content-between">
                            <h3 className="text-dark">Precio: ${selectedPizza[0].price}</h3>
                            <button className='btn btn-danger'>Añadir 🛒</button>
                        </div>                        
                    </div>                    
                </div>                
            </div>            
        </div>        
    )
}

export default Pizza;