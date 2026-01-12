import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

function addToCart(product) {
  setCart((prevCart) => {
    const existingIndex = prevCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingIndex !== -1) {
      const updated = [...prevCart];
      updated[existingIndex].qty += 1;
      return updated;
    }

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
