export default function reducer(state, action){
    switch(action.type){
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
            cartItems: action.payload
        }
        case "ADD_TO_WISHLIST": return{
            ...state,
            wishlistItems: action.payload
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
            return {
                ...state,
                category: state.category.includes(action.payload) ? state.category.filter((item) => item !== action.payload) : [...state.category, action.payload]
            }
        }
        case "SEARCH" : return{
            ...state,
            searchBar: action.payload
        }
        case "REMOVE_ALL" : return {
            ...state,
            cartItems: action.payload
        }
        default : return {
            ...state
        }
    }
}