import { useLocation } from "react-router-dom";
import "../css/summarypage.css";
 
export default function OrderSummary() {
  
  const location = useLocation();
  const cart = location.state.data;
  const finalPrice = cart?.reduce(
    (acc, item) => (acc = acc + item.price * item.qty),
    0
  );
  return (
    <div className="summary-parent">
      <h1 style={{ textAlign: "center" }}>Order Summary</h1>
      <ul className="order-list">
        {cart?.map((item) => (
          <li>
            <h3>Order Name: {item.title}</h3>
            <p>Quantity: {item.qty}</p>
            <p>Price: Rs. {item.price}</p>
          </li>
        ))}
      </ul>
      <h4>Total order price: {finalPrice + 100}</h4>
      <h3>Thank you for 'booking' with us xD</h3>
    </div>
  );
}
