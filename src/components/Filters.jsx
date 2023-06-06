import { useContext } from "react"
import { productContext } from "../contexts/ProductContProvider"
import "../css/filter.css";

export default function Filter(){
    const { sortHandler, categoryHandler, ratingHandler, state, priceHandler } = useContext(productContext);
    return (
        <div className="filter">
            <div className="heading-filter">
                <h2>Filters</h2>
                <button className="clear">Clear</button>
            </div>
            <h3 className="sort-heading">Sort By: </h3>
            <label htmlFor="" className="sort">
                
                <input type="radio" onChange={() => sortHandler("lTh")} name="price" id="" value="lTh" /> Price: Low to High
                <input type="radio" onChange={() => sortHandler("hTl")} name="price" id="" value="hTl"/> Price: High to Low
            </label>
            <label htmlFor="" className="category">
                Category: 
                <input type="checkbox" onChange={() => categoryHandler("fiction")}name="" id="" value="fiction" checked={state.category.includes("fiction")}/> Fiction
                <input type="checkbox" onChange={() => categoryHandler("non-fiction")}name="" id="" value="nonfiction" checked={state.category.includes("non-fiction")}/> Non-Fiction
                <input type="checkbox" onChange={() => categoryHandler("horror")}name="" id="" value="horror"checked={state.category.includes("horror")}/> Horror
            </label>
            <label htmlFor="" className="price">
                Price Range: <span>200</span><input type="range" name="" id="" min="200" max="500" step= "50" value={state.price} onChange={(e) => priceHandler(e)}/><span>500</span>
                <p>Range Selected : 200 to {state.price}</p>
            </label>
            Ratings: 
            <label htmlFor="" className="rating">
                <input type="radio" onChange={() => ratingHandler("5")} name="rating" id="" value="5"/>5 Stars
                <input type="radio" onChange={() => ratingHandler("4")} name="rating" id="" value="4"/>4 Stars
                <input type="radio" onChange={() => ratingHandler("3")} name="rating" id="" value="3"/>3 Stars
                <input type="radio" onChange={() => ratingHandler("2")} name="rating" id="" value="2"/>2 Stars
            </label>
        </div>
    )
}