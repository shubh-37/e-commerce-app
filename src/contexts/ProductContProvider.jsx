import { createContext, useEffect, useReducer, useState } from "react";
import reducer from "../Reducer";
export const productContext = createContext();

export default function ProductContProvider({ children }){
    const [state, dispatch] = useReducer(reducer, {
        allProducts: [],
        refData: [],
        categories: [],
        wishListItems: [],
        cartItems: []
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
            const response = await fetch("/api/user/cart")
        } catch (error) {
            
        }
    }

    async function addToCart(product){
        try {
            const response = await fetch("/api/user/cart", {
                method: "POST",
                body: product
            })
        } catch (error) {
            
        }
    }

    function showCategoryProd(val){
        dispatch({type: "CATEGORY", payload: val})
    }
    useEffect(() => {
        getProducts();
        getCategory();
    } , [])
    return (
        <productContext.Provider value={{state, showCategoryProd, isLoading}}>{ children }</productContext.Provider>
    )
}