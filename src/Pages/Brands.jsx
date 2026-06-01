import "../css/Brands.css";
import "../fontawesome/css/fontawesome.min.css";
import "../fontawesome/css/all.css";
import { brands } from "../data";
import { Link } from "react-router-dom";

function Brands (){

    return(
        <>
         <div className="section6 mb-10 ">
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
        </>
    )
}
export default Brands;