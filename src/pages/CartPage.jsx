import { useContext } from "react";
import { productContext } from "../contexts/ProductContProvider";

export default function Cart(){
    const { state } = useContext(productContext);
    return (
        <div>
            <h2>My cart ({state.cartItems.length})</h2>
            <ul>
                {
                    state.cartItems.map(item => (
                        <li>
                            {item.title}
                            {item.price}
                            <button>Remove from cart</button>
                            <button>Move to wishlist</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}