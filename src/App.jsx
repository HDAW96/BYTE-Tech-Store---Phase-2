import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import { Link } from "react-router-dom";
import "./fontawesome/css/fontawesome.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/categories/:categoryName" element={<Home />} />
          <Route path="/brands/:brandName" element={<Home />} />
        </Routes>
      
      <Footer />
    </>
  );
}

export default App;
