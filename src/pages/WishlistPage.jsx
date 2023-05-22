import { useContext } from "react";
import { productContext } from "../contexts/ProductContProvider";

export default function Wishlist(){
    const {state} = useContext(productContext);

    return (
        <div>
            <h2>My Wishlist</h2>
            <ul>
                {
                    state?.wishlistItems?.map(item => (
                        <li>
                            {item.title}
                            {item.price}
                            <button>Move to cart</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}