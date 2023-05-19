import { useContext } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../contexts/ProductContProvider";

export default function Product(){
    const {prodId} = useParams();
    const { state } = useContext(productContext);

    const selectedProd = state.refData.find(({id}) => id === prodId);
    return (
        <div>
            <img src="https://picsum.photos/150/150" alt="book" />
            <h2>Title: {selectedProd?.title}</h2>
            <p>Author: {selectedProd?.author}</p>
            <p>Price: {selectedProd?.price}</p>
            <p>Category: {selectedProd?.categoryName}</p>
            <p>Description: {selectedProd?.desc}</p>
            <button>Add to cart</button>
            <button>Add to wishlist</button>
        </div>  
    )
}