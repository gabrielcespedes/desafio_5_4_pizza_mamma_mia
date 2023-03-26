import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar bg-info">
            <div className="container">
                <div className="navbar-brand">
                    <h5> <Link to="" className="text-light text-decoration-none">🍕 Pizzería Mamma Mia!</Link></h5>
                </div>
                <div>
                    <h5><Link to="/carrito" className="text-decoration-none">🛒</Link></h5>
                </div>                                                
            </div>            
        </div>
        
    )
}

export default Navbar;