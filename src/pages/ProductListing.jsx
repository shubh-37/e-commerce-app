import { useContext } from "react";
import { Link } from "react-router-dom";
import Filter from "../components/Filters";
import { productContext } from "../contexts/ProductContProvider";

export default function ProductListing(){
    const {ratedProd, handleCart, handleWishlist} = useContext(productContext);
    return (
        <div>
            <Filter />
            <ul>
                {
                    ratedProd?.map((item) => (
                        <li key={item.id}>
                            <Link to={`/product/${item.id}`}><img src="https://picsum.photos/150/150" alt="prod-img" /></Link>
                            <h3>Title: {item.title}</h3>
                            <p>Price: Rs {item.price}</p>
                            <p>Genre: {item.categoryName}</p>
                            <p>Rating: {item.rating} stars</p>
                            <button onClick={() => handleCart(item)}>Add to cart</button>
                            <button onClick={() => handleWishlist(item)}>Add to wishlist</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}