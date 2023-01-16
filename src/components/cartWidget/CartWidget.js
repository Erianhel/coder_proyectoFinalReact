import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa"
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
export const CartWidget = () => {
    const { getTotalProducts } = useContext(CartContext);
    return(
    <Link to="/cart">
        <div>
            <FaShoppingCart size={40} color={"#fff"} />
            <span className="top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {getTotalProducts()}
            </span>
        </div>
    </Link>
    )
}

