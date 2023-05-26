import { NavLink} from "react-router-dom";
import { useContext } from "react";
import { productContext } from "../contexts/ProductContProvider";
import "../css/header.css";

export default function Header(){
    const {searchHandler, state} = useContext(productContext);
    return(
        <div className="header">
            <div >
                <NavLink to ="/" className="heading-home"><h3 >Bookworm's Stop</h3></NavLink>
            </div>
            <div className="search">
                <input onChange={(e) => searchHandler(e)} type="text" name="" id="" placeholder="Search"/>
            </div>
            <div className="icons">
                    <NavLink to="/cart" className="fa fa-shopping-cart cart"><span>{state.cartItems.length}</span></NavLink>
                    <NavLink to="/wishlist" className="fa fa-heart cart"><span>{state.wishlistItems.length}</span></NavLink>
                    <NavLink to="/login" className="fa fa-user"></NavLink>
            </div>
        </div>
    )
}

