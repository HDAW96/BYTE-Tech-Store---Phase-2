import "../fontawesome/css/fontawesome.min.css";
import "../css/Home.css";
import BannerImage from "../assets/BYTE_Logo_1-removebg-preview (1).png";
import Banner from "../assets/1080.jpg";
import { categories } from "../data";
import { brands } from "../data";
import Display from "../assets/pexels-dkomov-34803979.jpg";
import { Link } from "react-router-dom";
function Home() {

  return (
    <>
      <div className="banner-container">
        <img
          src={BannerImage}
          alt=""
          className="banner-logo xs:w-40 xs:h-40 sm:w-64 sm:h-64 md:w-86 md:h-86 lg:w-80 lg:h-80 xs:translate-y-[50%] sm:translate-y-[50%] md:translate-y-[-50%] lg:translate-y-[-20%] surfacePro7:translate-y-[-20%]"
          draggable={false}
        ></img>
        <h1 className="banner-title  md:text-xl sm:text-md text-center lg:text-2xl  sm:line-height[3] surfacePro7:translate-y-[550%] xs:translate-y-[550%]  sm:translate-y-[550%]  md:translate-y-[-350%] lg:translate-y-[-100%]">Your trusted tech partner.</h1>
        <img src={Banner} alt="Banner" className="banner md:shrink-0 xs:w-full"></img>
      </div>
      <div className="section2 mb-10">
        <h2 className="category-title">Categories</h2>
        <div className="categories md:flex-row flex-col md:gap-10 flex-wrap justify-center items-center sm:gap-15 sm:h-150">
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
      <div className="img-section mb-10 flex-wrap justify-center items-center xs:gap-10 sm:gap-20 xs:column md:gap-20 lg:gap-40">
        <img
          src={Display}
          alt="displayImg"
          className="displayImg sm:w-64 sm:h-64 md:w-80 md:h-80 sm:translate-y-[50%] md:translate-y-[10%] lg:translate-y-[10%] xs:w-16 xs:h-16"
        ></img>
        <div className="img-info">
          <h1>Premium Tech for Every User.</h1>
          <br></br>
          <br></br>
          <p className="sm:text-sm md:text-lg">
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

        
      </div>
      <div className="section3 mb-10 ">
        <h2 className="category-title">Brands</h2>
        <div className="categories md:flex-row flex-col gap-10 flex-wrap justify-center items-center sm:gap-20 sm:h-150">
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
