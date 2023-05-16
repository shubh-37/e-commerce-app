import { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../contexts/ProductContProvider";

export default function ProductListing(){
    const {state} = useContext(productContext);
    console.log(state.allProducts)
    return (
        <div>
            <ul>
                {
                    state?.allProducts.map((item) => (
                        <li key={item.id}>
                            <Link to={`/product/${item.id}`}><img src="https://picsum.photos/150/150" alt="prod-img" /></Link>
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <button>Add to cart</button>
                            <button>Add to wishlist</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}