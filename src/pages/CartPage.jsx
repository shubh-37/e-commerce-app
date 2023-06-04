import { useContext } from "react";
import EmptyCart from "../components/EmptyCart";
import { productContext } from "../contexts/ProductContProvider";
import { Link } from "react-router-dom";
import "../css/cartpage.css";
import Pricing from "../components/Pricing";
import { toast } from "react-toastify";

export default function Cart() {
  const { state, removeItem, incrementItem, decrementItem, handleWishlist } =
    useContext(productContext);
  const finalPrice = state?.cartItems?.reduce(
    (acc, item) => (acc = acc + item.price * item.qty),
    0
  );
  const foundWL = (prodName) =>
    state?.wishlistItems?.find(({ title }) => title === prodName);
  function notify(val) {
    if (val === "r") {
      toast.warn("Item removed from cart!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.info("Moved to wishlist!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
  return (
    <>
      {state.cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <h2 className="heading-cart">My cart ({state?.cartItems?.length})</h2>
          <div className="cart-view">
            <ul className="cart">
              {state?.cartItems?.map((item) => (
                <li key={item.id} className="cart-items">
                  <div className="prod-img">
                    <Link to={`/product/${item.id}`}>
                      <img src="https://picsum.photos/220/250" alt="prod-img" />
                    </Link>
                  </div>
                  <div className="prod-desc">
                    <h3>{item.title}</h3>
                    <p>Rs. {item.price}</p>
                    <div className="quantity">
                      <button
                        onClick={() => incrementItem(item._id)}
                        className="incr-btn"
                      >
                        +
                      </button>
                      <p className="qty">{item.qty}</p>
                      <button
                        onClick={() => decrementItem(item._id)}
                        className="dcr-btn"
                      >
                        {item.qty === 0 ? removeItem(item._id) : "-"}
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        removeItem(item._id);
                        notify("r");
                      }}
                      className="remove-btn"
                    >
                      Remove from cart
                    </button>
                    <button
                      onClick={() => {
                        removeItem(item._id);
                        handleWishlist(item);
                        notify("m");
                      }}
                      disabled={foundWL(item.title)}
                      className="wl-btn"
                    >
                      {foundWL(item.title)
                        ? "Added to wishlist"
                        : "Move to wishlist"}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <Pricing finalPrice={finalPrice} checker={true} />
          </div>
        </>
      )}
    </>
  );
}
