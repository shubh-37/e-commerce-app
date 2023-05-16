import { useContext } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../contexts/ProductContProvider";

export default function Product(){
    const {prodId} = useParams();
    const { state } = useContext(productContext);

    const selectedProd = state.refData.find(({id}) => id === prodId);
    return (
        <h2>{selectedProd?.title}</h2>
    )
}