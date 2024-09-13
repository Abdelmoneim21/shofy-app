import { FaTruck } from "react-icons/fa";
import "./nav.css";
function Nav() {
  return (
    <div className="free">
      <div className="icon">
        <FaTruck />
      </div>
      <p>
        <span>FREE</span> shipping when shopping up to 1000$
      </p>
    </div>
  );
}
export default Nav;
