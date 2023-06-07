import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import reducer from "../Reducer";
export const productContext = createContext();

export default function ProductContProvider({ children }) {
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
    price: 500,
  });
  const navigate = useNavigate();

  const prodPrice =
    state?.price !== 500
      ? state?.allProducts?.filter(({ price }) => price <= state.price)
      : state?.allProducts;
  const searchedProd =
    state.searchBar.length > 0
      ? prodPrice.filter(({ title }) =>
          title.toLowerCase().includes(state.searchBar.toLowerCase())
        )
      : prodPrice;

  const sortedProd = state.sortPrice
    ? searchedProd.sort((a, b) =>
        state.sortPrice === "hTl" ? b.price - a.price : a.price - b.price
      )
    : searchedProd;

  const checkedProd = (() => {
    const { category } = state;
    if (category.length > 0) {
      return sortedProd.filter(({ categoryName }) =>
        category.some((item) => item === categoryName)
      );
    } else {
      return sortedProd;
    }
  })();

  const ratedProd = (() => {
    const { rating } = state;
    let returnData = [];
    if (rating) {
      switch (rating) {
        case "5": {
          returnData = checkedProd?.filter(({ rating }) => rating === "5");
          break;
        }
        case "4": {
          returnData = checkedProd?.filter(({ rating }) => rating === "4");
          break;
        }
        case "3": {
          returnData = checkedProd?.filter(({ rating }) => rating === "3");
          break;
        }
        case "2": {
          returnData = checkedProd?.filter(({ rating }) => rating === "2");
          break;
        }
        default: {
          console.log("something wrong!");
          break;
        }
      }
    } else {
      returnData = checkedProd;
    }
    return returnData;
  })();

  async function getProducts() {
    try {
      const response = await fetch("/api/products");
      if (response.status === 200) {
        const data = await response.json();
        dispatch({ type: "ADD_PRODUCTS", payload: data.products });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategory() {
    try {
      const response = await fetch("/api/categories");
      if (response.status === 200) {
        const data = await response.json();
        dispatch({ type: "CATEGORIES", payload: data.categories });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function delCartItems(prodId) {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await fetch(`/api/user/cart/${prodId}`, {
        method: "DELETE",
        headers: {
          authorization: encodedToken,
        },
      });
      const data = await response.json();
      dispatch({ type: "ADD_TO_CART", payload: data.cart });
    } catch (error) {
      console.log(error);
    }
  }
  async function delWLItems(prodId) {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await fetch(`/api/user/wishlist/${prodId}`, {
        method: "DELETE",
        headers: {
          authorization: encodedToken,
        },
      });
      const data = await response.json();
      dispatch({ type: "ADD_TO_WISHLIST", payload: data.wishlist });
    } catch (error) {
      console.log(error);
    }
  }

  async function addToWishlist(product) {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          authorization: encodedToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product,
        }),
      });
      const data = await response.json();
      dispatch({ type: "ADD_TO_WISHLIST", payload: data.wishlist });
    } catch (error) {}
  }

  async function cartQty(obj) {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await fetch(`/api/user/cart/${obj.prodId}`, {
        method: "POST",
        headers: {
          authorization: encodedToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: {
            type: obj.action,
          },
        }),
      });
      const data = await response.json();
      dispatch({ type: "ADD_TO_CART", payload: data.cart });
    } catch (error) {
      console.log(error);
    }
  }

  async function addToCart(product) {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: encodedToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product,
        }),
      });
      const data = await response.json();
      dispatch({ type: "ADD_TO_CART", payload: data.cart });
    } catch (error) {
      console.log(error);
    }
  }

  function handleCart(product) {
    addToCart(product);
  }
  function removeFromWL(prodId) {
    delWLItems(prodId);
  }
  function removeItem(productId) {
    delCartItems(productId);
  }
  function incrementItem(prodId) {
    cartQty({ action: "increment", prodId });
  }
  function decrementItem(prodId) {
    cartQty({ action: "decrement", prodId });
  }
  function handleWishlist(prod) {
    addToWishlist(prod);
  }
  function showCategoryProd(val) {
    dispatch({ type: "CHECKBOX", payload: val });
  }
  function sortHandler(val) {
    dispatch({ type: "SORT", payload: val });
  }

  function categoryHandler(val) {
    dispatch({ type: "CHECKBOX", payload: val });
  }

  function ratingHandler(val) {
    dispatch({ type: "RATING", payload: val });
  }
  function priceHandler(e) {
    dispatch({ type: "PRICE", payload: e.target.value });
  }

  function searchHandler(e) {
    navigate("/products");
    dispatch({ type: "SEARCH", payload: e.target.value });
  }

  function clearFilter() {
    dispatch({
      type: "CLEAR",
      payload: {
        sortPrice: null,
        rating: null,
        searchBar: "",
        price: 500,
        category: [],
      },
    });
  }

  useEffect(() => {
    getProducts();
    getCategory();
  }, []);
  return (
    <productContext.Provider
      value={{
        state,
        dispatch,
        showCategoryProd,
        handleCart,
        sortHandler,
        categoryHandler,
        ratingHandler,
        priceHandler,
        ratedProd,
        handleWishlist,
        removeItem,
        incrementItem,
        decrementItem,
        searchHandler,
        removeFromWL,
        clearFilter,
      }}
    >
      {children}
    </productContext.Provider>
  );
}
