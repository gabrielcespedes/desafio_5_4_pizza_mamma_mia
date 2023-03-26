import { useContext} from "react";
import MyContext from "../my_context";

const Carrito = () => {
    const {pizzas, setNavTotal} = useContext(MyContext);

    const calculateTotal = () => {
        let total = 0;
        pizzas.forEach((element) => {
            total += element.price * element.amount;
        });
        setNavTotal(total);
        return total;
    }

    

    return(
        <div className="container bg-light m-5 p-5">
            <h6 className="text-dark">Detalles del pedido:</h6>
            <div className="container bg-white p-3">
                {pizzas.filter((element) => {
                    if (element.amount > 0) {
                        return element;
                    }
                }).map((element, index) => {return(<><p key={index}><img src={element.img} width="100"></img> {element.name[0].toUpperCase() + element.name.slice(1)} <span className="ms-auto">${element.price * element.amount}</span> </p>
                <hr></hr></> )})}
                <div className="d-flex justify-content-between">
                    <h3 className="text-dark">Total: ${calculateTotal()}                                        
                    </h3>
                    <button className="btn btn-success">Ir a Pagar</button>
                </div>                
            </div>
        </div>        
    )
}

export default Carrito;