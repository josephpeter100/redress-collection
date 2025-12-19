import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

function addToCart(product) {
  setCart((prevCart) => {
    const existingIndex = prevCart.findIndex(
      (item) => item.id === product.id
    );

    // If item already in cart → increase qty
    if (existingIndex !== -1) {
      const updatedCart = [...prevCart];
      updatedCart[existingIndex].qty += 1;
      return updatedCart;
    }

    // If new item → add with qty = 1
    return [...prevCart, { ...product, qty: 1 }];
  });
}

  function increaseQty(index) {
    const updated = [...cart];
    updated[index].qty += 1;
    setCart(updated);
  }

  function decreaseQty(index) {
    const updated = [...cart];
    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
    }
    setCart(updated);
  }

  function removeFromCart(index) {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  }

  function getTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
