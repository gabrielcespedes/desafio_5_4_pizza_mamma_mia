import { Link } from "react-router-dom";
import { useContext } from "react";

import MyContext from "../my_context";

const Navbar = () => {
    const{navTotal} = useContext(MyContext);

    return(
        <div className="navbar bg-info">
            <div className="container">
                <div className="navbar-brand">
                    <h5> <Link to="" className="text-light text-decoration-none">🍕 Pizzería Mamma Mia!</Link></h5>
                </div>
                <div>
                    <h5><Link to="/carrito" className="text-light text-decoration-none">🛒 ${navTotal}</Link></h5>
                </div>                                                
            </div>            
        </div>
        
    )
}

export default Navbar;