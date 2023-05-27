import { useContext } from "react";
import { Link } from "react-router-dom";
import EmptyWishlist from "../components/EmptyWishlist";
import { productContext } from "../contexts/ProductContProvider";
import "../css/wishlist.css"
export default function Wishlist(){
    const {state, handleCart} = useContext(productContext);
    const foundC = (prodName) =>  state.cartItems.find(({title}) => title === prodName);
    return (
        <>
            {
                state.wishlistItems.length === 0 ? <EmptyWishlist /> : 
                <div className="wishlist">
                    <h2 className="heading-wl">My Wishlist({state.wishlistItems.length})</h2>
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
            }
        </>
        
    )
}