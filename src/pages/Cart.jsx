import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <span>{item.name}</span>
              <span>KSh {item.price}</span>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </div>
          ))}

          <h2>Total: KSh {total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;
