import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from "react-router-dom";
export default function Header(){
    return(
        <div className="header">
            <NavLink to ="/"><h3>Book IT</h3></NavLink>
            <Badge color="secondary">
                    <SearchIcon />{" "}
            </Badge>
            <input type="text" name="" id="" placeholder="Search"/>
            <button>Login</button>
            <div>
                <Badge color="secondary">
                    <NavLink to="/cart"><ShoppingCartIcon /></NavLink>
                </Badge>
                <Badge color="secondary">
                    <NavLink to="/wishlist"><FavoriteBorderIcon /></NavLink>
                </Badge>
            </div>
        </div>
    )
}

//badgeContent={itemCount}