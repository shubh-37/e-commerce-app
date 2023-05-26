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
                {/* <span data-count={state.}></span> */}
                    <NavLink to="/cart" className="fa fa-shopping-cart" data-count={state.cartItems.length}></NavLink>
                    <NavLink to="/wishlist" className="fa fa-heart"></NavLink>
                    <NavLink to="/login" className="fa fa-user"></NavLink>
            </div>
        </div>
    )
}

