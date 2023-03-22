import imagen from '../delicious-pizza.jpg';

const Home = () => {
    return(
        <div style={{backgroundImage: `url(${imagen})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} className="bg-dark text-center hero">
            <div className="container">
                <h1 className="text-light">¡Pizzería Mamma Mia!</h1>
                <p className="text-light">Tenemos las mejores pizzas que podrás encontrar!</p>
                <hr className="text-light fs-4"></hr>
            </div>
            
        </div>
    )
}

export default Home;