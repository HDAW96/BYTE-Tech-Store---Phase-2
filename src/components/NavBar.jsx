import "../css/NavBar.css";
import "../fontawesome/css/fontawesome.min.css";
import "../fontawesome/css/all.css";
import Logo from "../assets/BYTE_Logo_2-removebg-preview (1).png";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
 
      <div className="container w-full flex-wrap justify-between items-center mx-auto px-4">
        <div className="topbar ">
          <img src={Logo} alt="LOGO" className="logo"></img>
          <input
            type="text"
            name="SEARCH"
            className="search"
            placeholder="Search for products..."
          ></input>
          <div className="shop-icons">
            <>
              {" "}
              <Link to="/wishlist" className="nav-link">
                <i className="fa-solid fa-heart"></i>Wishlist
              </Link>
            </>
            <Link to="/cart" className="nav-link">
              {" "}
              <i className="fa-solid fa-cart-arrow-down"></i>Cart
            </Link>
          </div>
        </div>
        </div>
        <div className="navbar ">
          <ul className="nav-links md:flex md:justify-center md:items-center flex-col md:flex-row gap-3 text-left md:gap-10">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li>
              <Link to="/categories" className="nav-link">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/brands" className="nav-link">
                Brands
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="phone">
              <i className="fa-solid fa-phone phone"></i>+961 76-553016
            </li>
          </ul>
        </div>
      
    </>
  );
}

export default NavBar;
