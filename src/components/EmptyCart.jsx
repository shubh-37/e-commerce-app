import  {Link} from "react-router-dom";
import "../css/emptycart.css";

export default function EmptyCart(){
    return (
        <div className="empty-cart">
            <img src="https://rukminim1.flixcart.com/www/500/500/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt=""/>
            <h3>Your cart is empty!</h3>
            <p>Add items to it now.</p>
            <Link to="/products"><button className="add-btn">Shop Now</button></Link>
        </div>
        
    )
}