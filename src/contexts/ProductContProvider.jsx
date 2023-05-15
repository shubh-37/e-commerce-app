import { createContext, useEffect, useReducer } from "react";

export const productContext = createContext();

export default function ProductContProvider({ children }){
    function reducer(){

    }
    const [state, dispatch] = useReducer(reducer, {
        
    })
    async function getProducts(){
        try {
            const response = await fetch("/api/products");
            if(response.status == 200){
                const data = await response.json();
                console.log(data.products);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getProducts();
    } , [])
    return (
        <productContext.Provider>{ children }</productContext.Provider>
    )
}