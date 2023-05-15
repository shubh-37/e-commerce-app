import {Routes, Route} from "react-router-dom";
import './App.css'
import Mockman from "mockman-js";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <Footer />  
    </div>
  );
}

export default App;
