import { useContext } from "react";
import {Link} from "react-router-dom";
import { productContext } from "../contexts/ProductContProvider";
import "../css/landingpage.css"

export default function LandingPage(){
    const { state, showCategoryProd, isLoading } = useContext(productContext);
    return (
        <div className="parent">
            <h1>{isLoading ? "Fetching products for you...": ""}</h1>
            <ul className="sub-parent">
                {
                    state?.categories.map(item => (
                        <li key={item.id} className="child" >
                            <div className ="img-container" style={{backgroundImage: `url(${item.src})`}}>
                                <div className="transparent">
                                    <h1>{item.categoryName}</h1>
                                    <p>{item.description}</p>
                                    <button onClick={() => showCategoryProd(item.categoryName)} className="submit-btn">
                                        <Link to ="/products" className="link">View Books</Link>
                                    </button>
                                </div>
                                 
                            </div>
                            
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}