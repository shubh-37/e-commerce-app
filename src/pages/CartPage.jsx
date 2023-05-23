import { useContext } from "react";
import { productContext } from "../contexts/ProductContProvider";

export default function Cart(){
    const { state, removeItem, incrementItem, decrementItem } = useContext(productContext);
    return (
        <div>
            <h2>My cart ({state.cartItems.length})</h2>
            <ul>
                {
                    state.cartItems.map(item => (
                        <li key={item.id}>
                            {item.title}
                            {item.price}
                            <button onClick={() => incrementItem(item._id)}>+</button>{item.qty}<button onClick={() => decrementItem(item._id)}>{ item.qty === 0 ? removeItem(item._id) :"-"}</button>
                            <button onClick={() => removeItem(item._id)}>Remove from cart</button>
                            <button>Move to wishlist</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}