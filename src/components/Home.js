import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";
import Context from "./Context";
function Home() {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="details">
            <h1>Summer Discount is BACK!!!</h1>
            <button>
              <Link to="/products" className="link">
                Show More <FaArrowRight />
              </Link>
            </button>
          </div>
          <div className="image">
            <img
              src="https://thumbs.dreamstime.com/b/black-e-commerce-online-store-icon-logo-business-concept-black-e-commerce-online-store-icon-logo-business-concept-white-131135811.jpg"
              alt="image-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
