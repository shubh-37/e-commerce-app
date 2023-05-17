import { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../contexts/ProductContProvider";

export default function ProductListing(){
    const {state, handleCart} = useContext(productContext);
    return (
        <div>
            <ul>
                {
                    state?.allProducts.map((item) => (
                        <li key={item.id}>
                            <Link to={`/product/${item.id}`}><img src="https://picsum.photos/150/150" alt="prod-img" /></Link>
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <button onClick={() => handleCart(item)}>Add to cart</button>
                            <button>Add to wishlist</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}