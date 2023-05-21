import { useContext } from "react"
import { productContext } from "../contexts/ProductContProvider"

export default function Filter(){
    const { sortHandler, categoryHandler, ratingHandler } = useContext(productContext);
    return (
        <div>
            <label htmlFor="">
                Sort By: 
                <input type="radio" onChange={() => sortHandler("lTh")} name="price" id="" value="lTh" /> Price: Low to High
                <input type="radio" onChange={() => sortHandler("hTl")} name="price" id="" value="hTl"/> Price: High to Low
            </label>
            <label htmlFor="">
                Category: 
                <input type="checkbox" onChange={() => categoryHandler()}name="" id="" value="fiction"/> Fiction
                <input type="checkbox" onChange={() => categoryHandler()}name="" id="" value="nonFiction"/> Non-Fiction
                <input type="checkbox" onChange={() => categoryHandler()}name="" id="" value="horror"/> Horror
            </label>
            <label htmlFor="">
                Price Range: <input type="range" name="" id="" min="200" max="1000" step= "100"/>
            </label>
            <label htmlFor="">
                Ratings: 
                <input type="radio" onChange={() => ratingHandler("5")} name="rating" id="" value="5"/> 5 Stars
                <input type="radio" onChange={() => ratingHandler("4")} name="rating" id="" value="4"/> 4 Stars
                <input type="radio" onChange={() => ratingHandler("3")} name="rating" id="" value="3"/> 4 Stars
                <input type="radio" onChange={() => ratingHandler("2")} name="rating" id="" value="2"/> 2 Stars
            </label>
        </div>
    )
}