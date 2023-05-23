import { useContext } from "react";
import { Link } from "react-router-dom";
import Filter from "../components/Filters";
import { productContext } from "../contexts/ProductContProvider";
import "../css/productlist.css";

export default function ProductListing(){
    const {ratedProd, handleCart, handleWishlist, state} = useContext(productContext);
    const foundC = (prodName) =>  state.cartItems.find(({title}) => title === prodName);
    const foundWL = (prodName) => state.wishlistItems.find(({title}) => title === prodName);
    return (
        <div className="container">
            <div className="filter">
                <Filter />
            </div>
            <ul className="product-list">
                {
                    ratedProd?.map((item) => (
                        <li key={item.id} className="prod-item">
                            <Link to={`/product/${item.id}`}><img src="https://picsum.photos/150/150" alt="prod-img" /></Link>
                            <h3>Title: {item.title}</h3>
                            <p>Price: Rs {item.price}</p>
                            <p>Genre: {item.categoryName}</p>
                            <p>Rating: {item.rating} stars</p>
                            {foundC(item.title) ?<Link to="/cart" className="go-btn">Visit cart</Link> : <button className ="add-btn"onClick={() => handleCart(item)}>Add to cart</button>}
                            <button onClick={() => handleWishlist(item)} disabled={foundWL(item.title)} className="wl-btn">{foundWL(item.title) ? "Added to wishlist" : "Add to wishlist"}</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}