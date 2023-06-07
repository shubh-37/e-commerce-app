import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import EmptyWishlist from "../components/EmptyWishlist";
import { productContext } from "../contexts/ProductContProvider";
import "../css/wishlist.css";
export default function Wishlist() {
  const {
    state,
    handleCart,
    removeFromWL,
    incrementItem,
    decrementItem,
    removeItem,
  } = useContext(productContext);
  const foundC = (prodName) =>
    state?.cartItems?.find(({ title }) => title === prodName);
  function notify(val) {
    if (val === "r") {
      toast.warning("Removed from wishlist :(", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success("Added to cart!", {
        position: "bottom-right",
        autoClose: 3000,
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
      {state?.wishlistItems?.length === 0 ? (
        <EmptyWishlist />
      ) : (
        <div className="wishlist">
          <h2 className="heading-wl">
            My Wishlist({state?.wishlistItems?.length})
          </h2>
          <ul className="wl">
            {state?.wishlistItems?.map((item) => (
              <li className="wl-items">
                <Link to={`/product/${item.id}`}>
                  <img src="https://picsum.photos/220/250" alt="prod-img" />
                </Link>
                <h3>{item.title}</h3>
                <p>Rs. {item.price}</p>
                {foundC(item.title) ? (
                  <div
                    className="quantity"
                    style={{ justifyContent: "center" }}
                  >
                    <button
                      onClick={() => incrementItem(item._id)}
                      className="incr-btn"
                    >
                      +
                    </button>
                    <p className="qty">{foundC(item.title).qty}</p>
                    <button
                      onClick={() => decrementItem(item._id)}
                      className="dcr-btn"
                    >
                      {item.qty === 0 ? removeItem(item._id) : "-"}
                    </button>
                  </div>
                ) : (
                  <></>
                )}
                {foundC(item.title) ? (
                  <Link to="/cart">
                    <button className="go-btn">Visit cart</button>
                  </Link>
                ) : (
                  <button
                    className="add-btn"
                    onClick={() => {
                      handleCart(item);
                      notify("a");
                    }}
                  >
                    Move to cart
                  </button>
                )}
                <button
                  onClick={() => {
                    removeFromWL(item._id);
                    notify("r");
                  }}
                  className="remove-btn"
                >
                  Remove from Wishlist
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
