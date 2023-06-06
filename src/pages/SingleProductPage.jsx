import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { productContext } from "../contexts/ProductContProvider";
import "../css/individualprod.css";

export default function Product(){
    const {prodId} = useParams();
    const { state, handleCart, handleWishlist } = useContext(productContext);

    const selectedProd = state.refData.find(({id}) => id === prodId);
    const otherProd = state.refData.filter((item) => item.categoryName === selectedProd.categoryName).filter((item) => item !== selectedProd);
    const foundC = (prodName) =>  state.cartItems.find(({title}) => title === prodName);
    const foundWL = (prodName) => state.wishlistItems.find(({title}) => title === prodName);
    return (
        <div className="parent">
            <div className="individual-prod">
                <div className="indi-img">
                    <img src="https://picsum.photos/200/200" alt="book" />
                </div>
                <div className="indi-desc">
                    <h2>Title: {selectedProd?.title}</h2>
                    <p>Author: {selectedProd?.author}</p>
                    <p>Price: {selectedProd?.price}</p>
                    <p>Category: {selectedProd?.categoryName}</p>
                    <p>Description: {selectedProd?.desc}</p>
                </div>
                <div className="indi-btns">
                    {foundC(selectedProd.title) ?<Link to="/cart"><button className="go-btn">Visit cart</button></Link> : <button className ="add-btn"onClick={() => handleCart(selectedProd)}>Add to cart</button>}
                    <button onClick={() => handleWishlist(selectedProd)} disabled={foundWL(selectedProd.title)} className="wl-btn">{foundWL(selectedProd.title) ? "Added to wishlist" : "Add to wishlist"}</button>
                </div>
            </div>
            <div>
                <h2>View other products</h2>
                <ul className="other-prod">
                    {
                        otherProd.map((item) => (
                            <li className="other-prod-item">
                                <Link to={`/product/${item.id}`}><img src="https://picsum.photos/335/150" alt="prod-img" /></Link>
                                <h3>Title: {item.title}</h3>
                                <p>Price: {item.price}</p>
                            </li>
                        ))
                    }
                </ul>
            </div> 
        </div> 
    )
}