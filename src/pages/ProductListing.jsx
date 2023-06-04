import { useContext } from "react";
import { Link } from "react-router-dom";
import Filter from "../components/Filters";
import { productContext } from "../contexts/ProductContProvider";
import "../css/productlist.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductListing() {
  const { ratedProd, handleCart, handleWishlist, state } =
    useContext(productContext);
  const foundC = (prodId) => state?.cartItems?.some(({ id }) => id === prodId);
  const foundWL = (prodName) =>
    state?.wishlistItems?.find(({ title }) => title === prodName);
  function notify(val) {
    if (val === "a") {
      toast.success("Added to cart!", {
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
      toast.info("Added to wishlist!", {
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
    <div className="container">
      <div className="filter">
        <Filter />
      </div>
      <ul className="product-list">
        {ratedProd?.map((item) => (
          <li key={item.id} className="prod-item">
            <Link to={`/product/${item.id}`}>
              <img src="https://picsum.photos/215/150" alt="prod-img" />
            </Link>
            <h3>Title: {item.title}</h3>
            <p>Price: Rs {item.price}</p>
            <p>Genre: {item.categoryName}</p>
            <p>Rating: {item.rating} stars</p>
            {foundC(item.id) ? (
              <Link to="/cart">
                <button className="go-btn">
                Visit cart
                </button>
                
              </Link>
            ) : (
              <button
                className="add-btn"
                onClick={() => {
                  handleCart(item);
                  notify("a");
                }}
              >
                Add to cart
              </button>
            )}
            <button
              onClick={() => {
                handleWishlist(item);
                notify("w");
              }}
              disabled={foundWL(item.title)}
              className="wl-btn"
            >
              {foundWL(item.title) ? "Added to wishlist" : "Add to wishlist"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
