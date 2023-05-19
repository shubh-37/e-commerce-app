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
        // dispatch({type: "ADD_TO_CART", payload: product})
        // console.log(state.cartItems);
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

    useEffect(() => {
        getProducts();
        getCategory();
        console.log(state.allProducts);
    } , [])
    return (
        <productContext.Provider value={{state, showCategoryProd, isLoading, handleCart, testLogin}}>{ children }</productContext.Provider>
    )
}