import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Pricing({ finalPrice, checker, radioCheck }) {
  function orderHandler() {
    if (radioCheck) {
      toast.success("order placed successfully");
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
        <button onClick={() => orderHandler()} className="checkout">
          <Link
            to="/checkout"
            style={{ textDecoration: "none", color: "black" }}
          >
            Place order
          </Link>
        </button>
      )}
    </div>
  );
}
