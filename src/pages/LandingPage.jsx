import { useContext } from "react";
import {Link} from "react-router-dom";
import { productContext } from "../contexts/ProductContProvider";

export default function LandingPage(){
    const { state, showCategoryProd, isLoading } = useContext(productContext);
    return (
        <div>
            <h1>{isLoading ? "Fetching products for you...": ""}</h1>
            <ul>
                {
                    state?.categories.map(item => (
                        <li key={item.id}>
                            <button onClick={() => showCategoryProd(item.categoryName)}>
                                <Link to ="/products">
                                <h1>{item.categoryName}</h1>
                                <p>{item.description}</p>
                                </Link>
                            </button> 
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}