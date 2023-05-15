import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from "react";
import {NavLink} from "react-router-dom";
export default function Header(){
    const [itemCount, setItemCount] = useState(1);
    return(
        <div className="header">
            <h3>MyShoppingSite</h3>
            <Badge color="secondary">
                    <SearchIcon />{" "}
            </Badge>
            <input type="text" name="" id="" placeholder="Search"/>
            <button>Login</button>
            <div>
                <Badge color="secondary" badgeContent={itemCount}>
                    <NavLink to="/cart"><ShoppingCartIcon /></NavLink>
                </Badge>
                <Badge color="secondary" badgeContent={itemCount}>
                    <NavLink to="/wishlist"><FavoriteBorderIcon /></NavLink>
                </Badge>
            </div>
        </div>
    )
}