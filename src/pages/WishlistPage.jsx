import { useContext } from "react";
import { Link } from "react-router-dom";
import EmptyWishlist from "../components/EmptyWishlist";
import { productContext } from "../contexts/ProductContProvider";
import "../css/wishlist.css"
export default function Wishlist(){
    const {state, handleCart, removeFromWL} = useContext(productContext);
    const foundC = (prodName) =>  state?.cartItems?.find(({title}) => title === prodName);
    return (
        <>
            {
                state?.wishlistItems?.length === 0 ? <EmptyWishlist /> : 
                <div className="wishlist">
                    <h2 className="heading-wl">My Wishlist({state?.wishlistItems?.length})</h2>
                    <ul className="wl">
                        {
                            state?.wishlistItems?.map(item => (
                                <li className="wl-items">
                                    <Link to={`/product/${item.id}`}><img src="https://picsum.photos/220/250" alt="prod-img" /></Link>
                                    <h3>{item.title}</h3>
                                    <p>Rs. {item.price}</p>
                                    {foundC(item.title) ?<Link to="/cart" className="go-btn">Visit cart</Link> : <button className ="add-btn"onClick={() => handleCart(item)}>Move to cart</button>}
                                    <button onClick={() => removeFromWL(item._id)} className="remove-btn">Remove from Wishlist</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
        </>
        
    )
}