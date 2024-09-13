import { useContext } from "react";
import { SearchContext } from "./Header";
import "./products.css";
function SearchData() {
  const search = useContext(SearchContext);
  console.log(search);
  // Check if search data is available
  if (!search || search.length === 0) {
    return;
  }

  return (
    <>
      <div className="card-handle">
        {search.map((element) => (
          <div className="card" key={element.id}>
            <img src={element.images[0]} alt="Product" />
            <div className="card-content">
              <h2 className="card-title">{element.title}</h2>
              <p className="card-text">
                {" "}
                {element.description.slice(0, 60)}
                {element.description.length > 60 && "..."}
              </p>
              <p className="card-price">{element.price} $</p>
              <button>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchData;
