import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo-wrap">
        <img src={logo} alt="Redress Collection" className="logo-img" />
        <span className="logo-text">Redress Collection</span>
      </Link>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
