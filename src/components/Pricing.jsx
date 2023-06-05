import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import OrderSummary from "../pages/OrderSummary";
import { productContext } from "../contexts/ProductContProvider";

export default function Pricing({ finalPrice, checker, radioCheck, item }) {
  const { state, dispatch } = useContext(productContext);
  const navigate = useNavigate();
  function orderHandler() {
    if (radioCheck) {
      const cart = state.cartItems;
      dispatch({ type: "REMOVE_ALL", payload: [] });
      navigate("/summary", {state: {data : cart}});
    } else {
      toast.error("Please select an address to continue", {
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
    <div className="pricing">
      <h3>Price Details</h3>
      <p>Price: {finalPrice}</p>
      <p>Delivery charges: 100</p>
      <p>Total amount: {finalPrice + 100}</p>
      {checker ? (
        <button className="checkout">
          <Link
            to="/checkout"
            style={{ textDecoration: "none", color: "black" }}
          >
            Checkout
          </Link>
        </button>
      ) : (
        <button className="checkout" onClick={() => {orderHandler()}}>
          {/* <Link
            to="/summary"
            style={{ textDecoration: "none", color: "black" }}
          > */}
            Place order
          {/* </Link> */}
        </button>
      )}
    </div>
  );
}
