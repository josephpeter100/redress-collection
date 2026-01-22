import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/admin-login" element={<AdminLogin />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
