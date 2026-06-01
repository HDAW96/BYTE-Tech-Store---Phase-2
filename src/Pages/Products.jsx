import "../css/Products.css";
import "../fontawesome/css/fontawesome.min.css";
import "../fontawesome/css/all.css";
import { Link } from "react-router-dom";
import { products } from "../products";
function Products() {
  return (
    <>
      <div className="section4">
        <Link to="/" className="back-link">
          <i className="fa-solid fa-arrow-left back"></i>
          <p className="backText"> Back to Home</p>
        </Link>
        <h2 className="category-title">All Products</h2>
        <hr
          style={{ width: "20%", margin: "auto", border: "2px solid black" }}
        ></hr>
        <div className = "allProducts">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Products;
