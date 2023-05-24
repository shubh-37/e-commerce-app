import { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../contexts/ProductContProvider";

export default function Wishlist(){
    const {state, handleCart} = useContext(productContext);
    const foundC = (prodName) =>  state.cartItems.find(({title}) => title === prodName);
    return (
        <div>
            <h2>My Wishlist</h2>
            <ul>
                {
                    state?.wishlistItems?.map(item => (
                        <li>
                            {item.title}
                            {item.price}
                            {foundC(item.title) ?<Link to="/cart" className="go-btn">Visit cart</Link> : <button className ="add-btn"onClick={() => handleCart(item)}>Move to cart</button>}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}