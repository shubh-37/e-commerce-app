import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "../components/Filters";
import { productContext } from "../contexts/ProductContProvider";
import "../css/productlist.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authContext } from "../contexts/AuthProvider";

export default function ProductListing() {
  const { ratedProd, handleCart, handleWishlist, state } =
    useContext(productContext);
  const foundC = (prodId) => state?.cartItems?.some(({ _id }) => _id === prodId);
  const foundWL = (prodName) =>
    state?.wishlistItems?.find(({ title }) => title === prodName);

  const { isLogin } = useContext(authContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function notify(val) {
    if (val === "a") {
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
    } else if (val === "w") {
      toast.info("Added to wishlist!", {
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
      toast.error("Please login to continue!", {
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
  //if(location.pathname === "/"){
  //   setCategory(["horror", "fiction"])
  // }else{
  //   setCategory([])
  // }
  return (
    <div className="container">
      <div className="filter">
        <Filter />
      </div>
      <ul className="product-list">
        {ratedProd?.map((item) => (
          <li key={item._id} className="prod-item">
            <Link to={`/product/${item._id}`}>
              <img src="https://picsum.photos/215/150" alt="prod-img" />
            </Link>
            <h3>Title: {item.title}</h3>
            <p>Price: Rs {item.price}</p>
            <p>Genre: {item.categoryName}</p>
            <p>Rating: {item.rating} stars</p>
            {foundC(item._id) ? (
              <Link to="/cart">
                <button className="go-btn">Visit cart</button>
              </Link>
            ) : (
              <button
                className="add-btn"
                onClick={() => {
                  if (isLogin) {
                    handleCart(item);
                    notify("a");
                  } else {
                    notify("e");
                  }
                }}
              >
                Add to cart
              </button>
            )}
            <button
              onClick={() => {
                if (isLogin) {
                  handleWishlist(item);
                  notify("w");
                } else {
                  notify("e");
                }
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
