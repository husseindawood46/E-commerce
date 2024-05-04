import "./App.css";
import Card from "./Pages/Card";
import LoginSignup from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import mens_banner from './components/Assets/banner_mens.png'
import woman_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory banner={mens_banner} category="men" />} />
          <Route path="/womans" element={<ShopCategory banner={woman_banner} category="women" />} />
          <Route path="/Kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/card" element={<Card />} />
          <Route path="/login" element={<LoginSignup/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
