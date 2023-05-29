import { useContext } from "react";
import EmptyCart from "../components/EmptyCart";
import { productContext } from "../contexts/ProductContProvider";

export default function Cart(){
    const { state, removeItem, incrementItem, decrementItem, handleWishlist } = useContext(productContext);
    const finalPrice = state.cartItems.reduce((acc, item) => acc = acc + item.price * item.qty,0);
    const foundWL = (prodName) => state.wishlistItems.find(({title}) => title === prodName);
    return (
        <>
        { state.cartItems.length === 0 ? <EmptyCart /> : 
            <div>
                <h2 className="heading-cart">My cart ({state.cartItems.length})</h2>
                <ul>
                    {
                        state.cartItems.map(item => (
                            <li key={item.id}>
                                {item.title}
                                {item.price}
                                <button onClick={() => incrementItem(item._id)}>+</button>{item.qty}<button onClick={() => decrementItem(item._id)}>{ item.qty === 0 ? removeItem(item._id) :"-"}</button>
                                <button onClick={() => removeItem(item._id)} className="remove-btn">Remove from cart</button>
                                <button onClick={() => {removeItem(item._id);handleWishlist(item)}} disabled={foundWL(item.title)} className="wl-btn">{foundWL(item.title) ? "Added to wishlist" : "Move to wishlist"}</button>
                            </li>
                        ))
                    }
                </ul>
                <div className="pricing">
                    <h3>Price Details</h3>
                    <p>Price: {finalPrice}</p>
                    <p>Delivery charges: 100</p>
                    <p>Total amount: {finalPrice+100}</p>
                    <button>Place order</button>
                </div>
        </div>
    }
    </>
    )
}