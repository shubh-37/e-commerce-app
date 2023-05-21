import { createContext, useEffect, useReducer, useState } from "react";
import reducer from "../Reducer";
export const productContext = createContext();
const encodedToken = localStorage.getItem("token");

export default function ProductContProvider({ children }){
    const [state, dispatch] = useReducer(reducer, {
        allProducts: [],
        refData: [],
        categories: [],
        wishListItems: [],
        cartItems: [],
        sortPrice: null,
        rating: null,
        searchBar: "",
        fictionCat: false,
        nonFictionCat: false,
        horrorCat: false,
        price: 200
    });

    const [isLoading, setLoading] = useState(false);

    const sortedProd = state.sortPrice ? state?.allProducts.sort((a,b) => state.sortPrice === "hTl" ? b.price - a.price : a.price - b.price) : state.allProducts;

    const checkedProd = (() => {
        const { fictionCat, nonFictionCat, horrorCat } = state;
        let returnData = [];
        if (!fictionCat && !nonFictionCat && ! horrorCat) {
          returnData = sortedProd;
        } else if (!fictionCat && !nonFictionCat) {
          returnData = 
            sortedProd.filter((item) => item.categoryName !==  "horror")
        } else if (!fictionCat && !horrorCat) {
          returnData = sortedProd.filter((item) => item.categoryName !== "non-fiction");
        } else {
            returnData = sortedProd.filter((item) => item.categoryName !== "fiction");  
        }
        return returnData;
      })();

    const ratedProd = (() => {
        const { rating } = state;
        let returnData = [];
        if(rating) {
            switch(rating){
                case "5": {
                    returnData = checkedProd.filter(( { rating }) => rating === "5");
                    break;
                }
                case "4": {
                    returnData = checkedProd.filter(( { rating }) => rating === "4");
                    break;
                }
                case "3": {
                    returnData = checkedProd.filter(( { rating }) => rating === "3");
                    break;
                }
                case "2": {
                    returnData = checkedProd.filter(( { rating }) => rating === "2");
                    break;
                }
                default : {
                    console.log("something wrong!")
                    break;
                }
            }
        }else{
            returnData = checkedProd;
        }
        return returnData;
    })();  

    async function getProducts(){
        try {
            const response = await fetch("/api/products");
            if(response.status === 200){
                const data = await response.json();
                state.allProducts = data.products;
                state.refData = data.products;
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function getCategory(){
        setLoading(true);
        try {
            const response = await fetch("/api/categories");
            if(response.status === 200){
                const data = await response.json();
                state.categories = data.categories;
            }
        } catch (error) {
            console.log(error);   
        }finally{
            setLoading(false);
        }
    }

    async function getCartItems(){
        try {
            const response = await fetch("/api/user/cart", {
                headers: {
                    authorization: encodedToken
                }
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            
        }
    }

    async function addToCart(product){
        try {
            const response = await fetch("/api/user/cart", {
                method: "POST",
                headers: {
                    authorization: encodedToken
                },
                body: JSON.stringify(product)
            })
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    async function loginTestUser(){
        const user = {
            email: "adarshbalika@gmail.com",
            password: "adarshbalika"
        }
        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                body: JSON.stringify(user)
            });
            const data = await response.json();
            console.log(data.encodedToken);
            localStorage.setItem("token", data.encodedToken);
        } catch (error) {
            console.log(error);
        }
    }

    function handleCart(product){
        addToCart(product);
        getCartItems();
    }
    function showCategoryProd(val){
        dispatch({type: "CATEGORY", payload: val})
    }

    function testLogin(){
        console.log("clicked")
        loginTestUser();
    }
    
    function sortHandler(val){
        dispatch({ type: "SORT", payload: val})
    }

    function categoryHandler(e){
        dispatch({ type: "CHECKBOX", payload: e.target.value})
    }

    function ratingHandler(val){
        dispatch({ type: "RATING", payload: val})
    }

    useEffect(() => {
        getProducts();
        getCategory();
        console.log(state.allProducts);
    } , [])
    return (
        <productContext.Provider value={{state, showCategoryProd, isLoading, handleCart, testLogin, sortHandler, categoryHandler, ratingHandler, ratedProd}}>{ children }</productContext.Provider>
    )
}