import {Routes, Route} from "react-router-dom";
import './App.css'
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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:prodId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<AddressPage />} />
      </Routes>
      <Footer />  
    </div>
  );
}

export default App;
