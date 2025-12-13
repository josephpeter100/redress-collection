import { Link } from "react-router-dom";

function Header({ cartCount, openCart }) {
  return (
    <header className="header">
      <h1 className="logo">Redress Collection</h1>

      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </nav>
    </header>
  );
}

export default Header;
