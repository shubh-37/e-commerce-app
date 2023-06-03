import { Link } from "react-router-dom";

export default function Pricing({finalPrice, checker}) {
  return (
    <div className="pricing">
      <h3>Price Details</h3>
      <p>Price: {finalPrice}</p>
      <p>Delivery charges: 100</p>
      <p>Total amount: {finalPrice + 100}</p>
      <button className="checkout">{checker ? <Link to="/checkout" style={{textDecoration: "none", color: "black"}}>Checkout</Link>: <Link to="/checkout" style={{textDecoration: "none", color: "black"}}>Place order</Link>}</button>
    </div>
  );
}
