import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Products from "./Pages/Products";
import Categories from "./Pages/Categories";
import Brands from "./Pages/Brands";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./fontawesome/css/fontawesome.min.css";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
