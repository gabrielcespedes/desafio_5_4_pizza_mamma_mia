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
        <p className="text-dark">pizza</p>
    )
}

export default Pizza;