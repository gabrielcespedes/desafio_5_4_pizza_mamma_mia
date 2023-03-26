import imagen from '../delicious-pizza.jpg';

import { useContext} from 'react';

import { useNavigate } from 'react-router-dom';

import MyContext from '../my_context';

const Home = () => {

    const{pizzas, setPizzas} = useContext(MyContext);

    const navigate = useNavigate();

    const Add_Click = (id) => {
        const pizza_id = pizzas.findIndex((element) => element.id === id);
        pizzas[pizza_id].amount = pizzas[pizza_id].amount + 1;
        setPizzas([...pizzas]);
    }

    return(
        <>
            <div style={{backgroundImage: `url(${imagen})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className="bg-dark text-center hero">
                <div className="container">
                    <h1 className="text-light">¡Pizzería Mamma Mia!</h1>
                    <p className="text-light">Tenemos las mejores pizzas que podrás encontrar!</p>
                    <hr className="text-light fs-4"></hr>
                </div>            
            </div>
            <div className='row'>
                {pizzas.map(                    
                    (element, index) => (
                    <div key={index} className='col-12 col-md-6 col-xl-3'>
                        <div className='card m-auto my-4 tarjeta'>
                            <img src={element.img} alt='imagen pizza' className='card-img-top'></img>
                            <div className='card-body'>
                                <h4>{element.name[0].toUpperCase() + element.name.slice(1)}</h4>
                                <hr></hr>
                                <h6>Ingredientes:</h6>
                                {element.ingredients.map(
                                    (e, index) => (<p key={index}>🍕 {e}</p>)
                                )}
                                <h3 className='text-center'>$ {element.price}</h3>
                                <div className="d-flex justify-content-around">
                                    <button onClick={() => navigate(`/pizza/${element.id}`)} className='btn btn-info'>Ver Más 👀</button>
                                    <button onClick={() => Add_Click(element.id)} className='btn btn-danger'>Añadir 🛒</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                )}
            </div>
        </>
        
    )
}

export default Home;