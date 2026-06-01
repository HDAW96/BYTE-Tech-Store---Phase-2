
import "../css/Categories.css";
import "../fontawesome/css/fontawesome.min.css";
import { categories } from "../data";
import { Link } from "react-router-dom";
function Categories() {
return(
    <>
     <div className="section5 mb-10">
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
    </>
)

}
export default Categories;