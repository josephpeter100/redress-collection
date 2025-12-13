import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Redress Collection</h2>
        <p>Welcome back! Please log in.</p>

        <input type="email" placeholder="Email" className="input" />
        <input type="password" placeholder="Password" className="input" />

        <button className="login-btn">Login</button>

        <p className="small-text">
          Don’t have an account? <a href="#">Create one</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
