export default function reducer(state, action){
    switch(action.type){
        case "CATEGORY": {
            const filteredProd = state?.refData.filter(({categoryName}) => categoryName === action.payload);
            return {
                ...state,
                allProducts: filteredProd
        }
    }
        case "ADD_PRODUCTS": return {
            ...state,
            allProducts: action.payload,
            refData: action.payload
        }
        case "CATEGORIES" : return {
            ...state,
            categories: action.payload
        }
        case "ADD_TO_CART" : return {
            ...state,
            cartItems: [...state.cartItems, action.payload]
        }
        case "SORT": return {
            ...state,
            sortPrice: action.payload
        }
        case "RATING": return {
            ...state,
            rating: action.payload
        }
        case "CHECKBOX": {
            const selectedCat = `${action.payload}Cat`;
            return {
                ...state,
                [selectedCat]: !state[selectedCat]
            }
        }
        default : return {
            ...state
        }
    }
}