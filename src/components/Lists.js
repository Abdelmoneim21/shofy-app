import { CiLogin } from "react-icons/ci";
import "./Lists.css";
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
function Lists() {
  const { loginWithRedirect } = useAuth0();
  const { logout, user, isAuthenticated } = useAuth0();
  return (
    <div className="Lists-key">
      <div className="container">
        <div className="Links">
          <ul>
            <Link to="/" className="link">
              <li>Home</li>
            </Link>
            <Link to="/products" className="link">
              <li>Products</li>
            </Link>
            <Link to="/about" className="link">
              <li>About</li>
            </Link>
            <Link to="/contact" className="link">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="login">
          {isAuthenticated ? (
            <button
              className="btn"
              onClick={() => {
                logout({ logoutParams: { returnTo: window.location.origin } });
              }}
            >
              <CiLogout />
            </button>
          ) : (
            <button
              className="btn"
              onClick={() => {
                loginWithRedirect();
              }}
            >
              <CiLogin />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Lists;
