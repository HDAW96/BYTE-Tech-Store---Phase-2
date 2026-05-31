import "../fontawesome/css/fontawesome.min.css";
import "../css/Home.css";
import BannerImage from "../assets/BYTE_Logo_1-removebg-preview (1).png";
import Banner from "../assets/1080.jpg";
import Laptops from "../assets/LAPTOPS.png";
import Keyboards from "../assets/KEYBOARD.png";
import Mouse from "../assets/MOUSE.png";
import GamingPCs from "../assets/GAMING PCs.png";
import CPUs from "../assets/CPU.png";
import GPUs from "../assets/gpu.png";
import Monitors from "../assets/Monitor.png";
import AMD from "../assets/amd.png";

import ASUS from "../assets/ASUS.png";

import Promate from "../assets/promate.png";
import Redragon from "../assets/redragon.png";
import Gigabyte from "../assets/gigabyte-vector-logo.png";
import Porodo from "../assets/porodo.png";
import Madlions from "../assets/madlions.png";
import Micropack from "../assets/micropack.png";
import Zotac from "../assets/zotac.png";
import ASRock from "../assets/ASRock-Logo.wine.png";
import Acer from "../assets/acer.png";
import MSi from "../assets/MSi.png";
import Fantech from "../assets/fantech.png";
import DarkFlash from "../assets/darkflash.jpg";
import Display from "../assets/pexels-dkomov-34803979.jpg";
import { Link } from "react-router-dom";
function Home() {
  const categories = [
    { id: 1, name: "Laptop", img: Laptops },
    { id: 2, name: "Keyboard", img: Keyboards },
    { id: 3, name: "Mouse", img: Mouse },
    { id: 4, name: "Gaming PC", img: GamingPCs },
    { id: 5, name: "CPU", img: CPUs },
    { id: 6, name: "GPU", img: GPUs },
    { id: 7, name: "Monitor", img: Monitors },
  ];

  const brands = [
    { id: 1, name: "Promate", img: Promate },
    { id: 2, name: "Redragon", img: Redragon },
    { id: 3, name: "Gigabyte", img: Gigabyte },
    { id: 4, name: "Porodo", img: Porodo },
    { id: 5, name: "Madlions", img: Madlions },
    { id: 6, name: "Zotac", img: Zotac },
    { id: 7, name: "ASRock", img: ASRock },
    { id: 8, name: "MSi", img: MSi },
    { id: 9, name: "ASUS", img: ASUS },
    { id: 10, name: "Acer", img: Acer },
    { id: 11, name: "Darkflash", img: DarkFlash },
    { id: 12, name: "Fantech", img: Fantech },
    { id: 13, name: "Micropack", img: Micropack },
    { id: 14, name: "AMD", img: AMD },
  ];
  return (
    <>
      <div className="banner-container">
        <img
          src={BannerImage}
          alt=""
          className="banner-logo"
          draggable={false}
        ></img>
        <h1 className="banner-title">Your trusted tech partner.</h1>
        <img src={Banner} alt="Banner" className="banner"></img>
      </div>
      <div className="section2">
        <h2 className="category-title">Categories</h2>
        <div className="categories">
          {categories.map((category) => (
            <div key={category.id} className="category">
              <Link
                to={`/categories/${category.name.toLowerCase()}`}
                className="category-name"
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="category-image"
                  draggable={false}
                ></img>
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="img-section">
        <div className="img-info">
          <h1>Premium Tech for Every User.</h1>
          <br></br>
          <br></br>
          <p>
            Whether you’re a professional editor, a hardcore gamer, or a student
            looking for a reliable workstation, BYTE has you covered. We
            specialize in high-performance machines that don't compromise on
            quality. Our mission is to bridge the gap between top-tier
            technology and affordability, ensuring that everyone—regardless of
            their budget—has access to the tools they need to succeed in a
            digital world. lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Donec efficitur, nisl vel tincidunt commodo, nunc urna
            facilisis enim, a bibendum nisl nunc sed ligula. Suspendisse
            potenti. In hac habitasse platea dictumst. Donec a semper odio.
            Donec in felis id mi consectetur efficitur. Donec ac nisi sed enim
            efficitur convallis.
          </p>
        </div>

        <img src={Display} alt="displayImg" className="displayImg"></img>
      </div>
      <div className="section3">
        <h2 className="category-title">Brands</h2>
        <div className="categories">
          {brands.map((brand) => (
            <div key={brand.id} className="category">
              <Link
                to={`/brands/${brand.name.toLowerCase()}`}
                className="category-name"
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="category-image"
                  draggable={false}
                ></img>
                {brand.name}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <hr></hr>
    </>
  );
}
export default Home;
