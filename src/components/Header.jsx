import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <header className="header">
      <h1 className="logo">Redress Collection</h1>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>
    </header>
  );
}

export default Header;
