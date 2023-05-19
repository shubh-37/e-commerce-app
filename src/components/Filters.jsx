export default function Filter(){
    return (
        <div>
            <label htmlFor="">
                Sort By: 
                <input type="radio" name="price" id="" value="lTh" /> Price: Low to High
                <input type="radio" name="price" id="" value="hTl"/> Price: High to Low
            </label>
            <label htmlFor="">
                Category: 
                <input type="checkbox" name="" id="" value="fiction"/> Fiction
                <input type="checkbox" name="" id="" value="nonFiction"/> Non-Fiction
                <input type="checkbox" name="" id="" value="horror"/> Horror
            </label>
            <label htmlFor="">
                Price Range: <input type="range" name="" id="" min="200" max="1000" step= "100"/>
            </label>
            <label htmlFor="">
                Ratings: 
                <input type="radio" name="rating" id="" value="5"/> 5 Stars & below
                <input type="radio" name="rating" id="" value="4"/> 4 Stars & below
                <input type="radio" name="rating" id="" value="3"/> 4 Stars & below
                <input type="radio" name="rating" id="" value="2"/> 2 Stars & below
            </label>
        </div>
    )
}