import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const success = login(email, password);

    if (success) {
      navigate("/admin");
    } else {
      setError("Invalid login");
    }
  }

  return (
    <div className="auth-page">
      <h2>Admin Login</h2>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default AdminLogin;
