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
        default : return {
            ...state
        }
    }
}