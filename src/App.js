import { Routes, Route } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import ProductListing from "./pages/ProductListing";
import Wishlist from "./pages/WishlistPage";
import Cart from "./pages/CartPage";
import Product from "./pages/SingleProductPage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignUpPage";
import AddressPage from "./pages/AddressPage";
import { ToastContainer } from "react-toastify";
import OrderSummary from "./pages/OrderSummary";
import RequiresAuth from "./components/RequiresAuth";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  return (
    <div className="App">
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/mockman" element={<Mockman />} />
              <Route path="/products" element={<ProductListing />} />
              <Route
                path="/wishlist"
                element={
                  <RequiresAuth>
                    <Wishlist />
                  </RequiresAuth>
                }
              />
              <Route
                path="/cart"
                element={
                  <RequiresAuth>
                    <Cart />
                  </RequiresAuth>
                }
              />
              <Route path="/product/:prodId" element={<Product />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/checkout"
                element={
                  <RequiresAuth>
                    <AddressPage />
                  </RequiresAuth>
                }
              />
              <Route
                path="/summary"
                element={
                  <RequiresAuth>
                    <OrderSummary />
                  </RequiresAuth>
                }
              />
            </Routes>
          </div>

          <Footer />
          <ToastContainer />
        </>
      )}
    </div>
  );
}

export default App;
