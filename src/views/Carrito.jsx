import { useContext} from "react";
import MyContext from "../my_context";

const Carrito = () => {
    const {pizzas, setPizzas, setNavTotal} = useContext(MyContext);

    const calculateTotal = () => {
        let total = 0;
        pizzas.forEach((element) => {
            total += element.price * element.amount;
        });
        setNavTotal(total);
        return total;
    }

    const button_minus = (id) => {
        const pizza_Id =  pizzas.findIndex((element) => element.id === id);
        pizzas[pizza_Id].amount = pizzas[pizza_Id].amount - 1;
        setPizzas([...pizzas]);
    }
    
    const button_mas = (id) => {
        const pizza_Id =  pizzas.findIndex((element) => element.id === id);
        pizzas[pizza_Id].amount = pizzas[pizza_Id].amount + 1;
        setPizzas([...pizzas]);
    }

    return(
        <div className="container bg-light m-5 p-5">
            <h6 className="text-dark">Detalles del pedido:</h6>
            <div className="container bg-white p-3">
                {pizzas.filter((element) => {
                    if (element.amount > 0) {
                        return element;
                    }
                }).map((element, index) => {return(<div className="d-flex"><p key={index}><img src={element.img} width="100" alt="imagen pizza"></img> {element.name[0].toUpperCase() + element.name.slice(1)}</p> 
                <p className="ms-auto">${element.price * element.amount} 
                <button className="btn btn-danger mx-2" onClick={() => button_minus(element.id)}>-</button> <strong>{element.amount}</strong> 
                <button className="btn btn-primary mx-2" onClick={() => button_mas(element.id)}>+</button> </p> 
                <hr></hr></div> )})}
                <div>
                    <h3 className="text-dark">Total: ${calculateTotal()}                                        
                    </h3>
                    <button className="btn btn-success">Ir a Pagar</button>
                </div>                
            </div>
        </div>        
    )
}

export default Carrito;