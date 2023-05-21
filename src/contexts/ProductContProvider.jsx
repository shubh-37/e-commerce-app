import { createContext, useEffect, useReducer, useState } from "react";
import reducer from "../Reducer";
export const productContext = createContext();
const encodedToken = localStorage.getItem("token");

export default function ProductContProvider({ children }){
    const [state, dispatch] = useReducer(reducer, {
        allProducts: [],
        refData: [],
        categories: [],
        wishlistItems: [],
        cartItems: [],
        sortPrice: null,
        rating: null,
        searchBar: "",
        category: [],
        price: 200
    });

    const [isLoading, setLoading] = useState(false);
    const sortedProd = state.sortPrice ? state?.allProducts.sort((a,b) => state.sortPrice === "hTl" ? b.price - a.price : a.price - b.price) : state?.allProducts;

    const checkedProd = (() => {
        const { category } = state;
        if(category.length > 0){
            return sortedProd.filter(({categoryName}) => category.some((item) => item === categoryName));
        }else{
            return sortedProd;
        } 
      })();

    const ratedProd = (() => {
        const { rating } = state;
        let returnData = [];
        if(rating) {
            switch(rating){
                case "5": {
                    returnData = checkedProd?.filter(( { rating }) => rating === "5");
                    break;
                }
                case "4": {
                    returnData = checkedProd?.filter(( { rating }) => rating === "4");
                    break;
                }
                case "3": {
                    returnData = checkedProd?.filter(( { rating }) => rating === "3");
                    break;
                }
                case "2": {
                    returnData = checkedProd?.filter(( { rating }) => rating === "2");
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
                dispatch({type: "ADD_PRODUCTS", payload: data.products});
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
                dispatch({type: "CATEGORIES", payload: data.categories});
            }
        } catch (error) {
            console.log(error);   
        }finally{
            setLoading(false);
        }
    }

    // async function getCartItems(){
    //     try {
    //         const response = await fetch("/api/user/cart", {
    //             headers: {
    //                 authorization: encodedToken
    //             }
    //         });
    //         const data = await response.json();
    //     } catch (error) {
            
    //     }
    // }

    async function addToWishlist(product){
        try {
            const response = await fetch("/api/user/wishlist", {
                method: "POST",
                headers: {
                    authorization: encodedToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    product
                })
            });
            const data = await response.json();
            dispatch({type: "ADD_TO_WISHLIST", payload: data.wishlist});
        } catch (error) {
            
        }
    }

    async function addToCart(product){
        try {
            const response = await fetch("/api/user/cart", {
                method: "POST",
                headers: {
                    authorization: encodedToken,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    product
                })
            });
            const data = await response.json();
            dispatch({type: "ADD_TO_CART", payload: data.cart});
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
            localStorage.setItem("token", data.encodedToken);
        } catch (error) {
            console.log(error);
        }
    }

    function handleCart(product){
        addToCart(product);
        // getCartItems();
    }
    function handleWishlist(prod){
        addToWishlist(prod);
    }
    function showCategoryProd(val){
        dispatch({type: "CHECKBOX", payload: val})
    }

    function testLogin(){
        loginTestUser();
    }
    
    function sortHandler(val){
        dispatch({ type: "SORT", payload: val})
    }

    function categoryHandler(val){
        dispatch({ type: "CHECKBOX", payload: val})
    }

    function ratingHandler(val){
        dispatch({ type: "RATING", payload: val})
    }

    useEffect(() => {
        getProducts();
        getCategory();
    } , [])
    return (
        <productContext.Provider value={{state, showCategoryProd, isLoading, handleCart, testLogin, sortHandler, categoryHandler, ratingHandler, ratedProd, handleWishlist}}>{ children }</productContext.Provider>
    )
}