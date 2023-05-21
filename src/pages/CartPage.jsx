import { useContext } from "react";
import { productContext } from "../contexts/ProductContProvider";

export default function Cart(){
    const { state } = useContext(productContext);
    return (
        <div>
            <ul>
                {
                    state.cartItems.map(item => (
                        <li>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}