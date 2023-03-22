import imagen from '../delicious-pizza.jpg';

import { useContext } from 'react';
import MyContext from '../my_context';

const Home = () => {

    const{pizzas} = useContext(MyContext);

    console.log(pizzas);
    
    return(
        <>
            <div style={{backgroundImage: `url(${imagen})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className="bg-dark text-center hero">
                <div className="container">
                    <h1 className="text-light">¡Pizzería Mamma Mia!</h1>
                    <p className="text-light">Tenemos las mejores pizzas que podrás encontrar!</p>
                    <hr className="text-light fs-4"></hr>
                </div>            
            </div>
            <div>
                {pizzas.map(
                    element => (<div className='foto' style={{backgroundImage: `url(${element.img})`}}>hola</div>)
                )}
            </div>
        </>
        
    )
}

export default Home;