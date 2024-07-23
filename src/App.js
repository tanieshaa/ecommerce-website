import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Footer from "./Components/Footer/Footer";
import apparel from "./Components/Assets/apparel.png";
import accessories from "./Components/Assets/accessories.png";
import beauty from "./Components/Assets/beauty.png";
import HomeContextProvider from "./Context/HomeContext";

function App() {
  return (
    <HomeContextProvider>
      <BrowserRouter>
        <div className="wrapper">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/apparel"
                element={<Category banner={apparel} category="apparel" />}
              />
              <Route
                path="/accessories"
                element={
                  <Category banner={accessories} category="accessories" />
                }
              />
              <Route
                path="/beauty"
                element={<Category banner={beauty} category="beauty" />}
              />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </HomeContextProvider>
  );
}

export default App;
