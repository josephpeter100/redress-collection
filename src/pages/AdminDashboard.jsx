import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import products from "../data/products";

function AdminDashboard() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/admin-login");
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>

      <h3>Products</h3>

      <div className="admin-products">
        {products.map((product) => (
          <div key={product.id} className="admin-product">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <span>KSh {product.price}</span>
            <button className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
