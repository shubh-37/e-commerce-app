import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import {Link, NavLink} from "react-router-dom";
import { useContext } from "react";
import { productContext } from "../contexts/ProductContProvider";

export default function Header(){
    const {searchHandler} = useContext(productContext);
    return(
        <div className="header">
            <NavLink to ="/"><h3>Book IT</h3></NavLink>
            <Badge color="secondary">
                    <SearchIcon />{" "}
            </Badge>
            <input onChange={(e) => searchHandler(e)} type="text" name="" id="" placeholder="Search"/>
            <Link to="/login"><button>Login</button></Link>
            <Link to="/signup"><button>Sign Up</button></Link>
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