import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import SearchData from "./SearchData";
import Cart from "./Cart";
function Rout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/search" element={<SearchData />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
export default Rout;
