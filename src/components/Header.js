import "./header.css";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Lists from "./Lists";
import SearchData from "./SearchData";

export const SearchContext = React.createContext();
function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [foundData, setFoundData] = useState([]);
  console.log(foundData);

  function search(name) {
    fetch(`https://dummyjson.com/products/search?q=${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFoundData(data.products || []);
      }); // Update here
  }
  return (
    <SearchContext.Provider value={foundData}>
      <div className="header">
        <div className="container">
          <div className="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gV071l8VQBqOvaWyMctGOQ7zD30Z77Swyg&s"
              alt="img"
            />
            <h1>Shopify</h1>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="search for product"
              name="input"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              onClick={() => {
                search(searchTerm);
              }}
            >
              <Link to="/search">Search</Link>
            </button>
          </div>
          <div className="user">
            <div className="icon-1">
              <div className="user-icon">
                <FaRegUser />
              </div>
              <div>Hello , Creative Tutorial</div>
            </div>
          </div>
          <div className="icons">
            <div>
              <Link to="/" className="link">
                <FiShoppingCart />
              </Link>
            </div>
            <div>
              <Link to="/cart" className="link">
                <CiHeart />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Lists />
      <SearchData />
    </SearchContext.Provider>
  );
}
export default Header;
