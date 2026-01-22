import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

<CartProvider>
  <AuthProvider>
    <App />
  </AuthProvider>
</CartProvider>


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
