import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  function login(email, password) {
    // 🔐 Hardcoded admin credentials (for now)
    if (email === "oilejoseph1@gmail.com" && password === "Joseph100") {
      localStorage.setItem("isAdmin", "true");
      setIsAdmin(true);
      return true;
    }

    return false;
  }

  function logout() {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
  }

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
