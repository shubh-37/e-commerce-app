import { useContext } from "react";
import { productContext } from "../contexts/ProductContProvider";

export default function Wishlist(){
    const {state} = useContext(productContext);

    return (
        <div>
            <ul>
                {
                    state?.wishlistItems?.map(item => (
                        <li>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}