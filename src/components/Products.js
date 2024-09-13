import { useEffect, useState } from "react";
import "./products.css";
import { Link } from "react-router-dom";
function Products() {
  const [products, setProducts] = useState([]);

  function getAllProducts() {
    fetch("//dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        console.log(data);
      });
  }
  function getByCategory(cat) {
    fetch(`https://dummyjson.com/products/category/${cat}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <div className="categories">
        <ul>
          <button
            onClick={() => {
              getByCategory("beauty");
            }}
          >
            <li>Beauty</li>
          </button>
          <button
            onClick={() => {
              getByCategory("fragrances");
            }}
          >
            <li>fragrances</li>
          </button>
          <button
            onClick={() => {
              getByCategory("furniture");
            }}
          >
            <li>furniture</li>
          </button>
          <button
            onClick={() => {
              getByCategory("groceries");
            }}
          >
            <li>groceries</li>
          </button>
        </ul>
      </div>
      <div className="card-handle">
        {products.map((product) => {
          return (
            <div className="card" key={product.id}>
              <img src={product.images[0]} alt="Product" />
              <div className="card-content">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-text">
                  {" "}
                  {product.description.slice(0, 60)}
                  {product.description.length > 60 && "..."}
                </p>
                <p className="card-price">{product.price} $</p>
                <button onClick={() => {}}>
                  <Link to="/cart">Buy Now</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Products;
