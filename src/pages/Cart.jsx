import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <section className="products">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item, index) => (
        <div key={index} className="item">
          <p>{item.name}</p>
          <span>KSh {item.price}</span>
          <button className="add-btn" onClick={() => removeFromCart(index)}>
            Remove
          </button>
        </div>
      ))}
    </section>
  );
}

export default Cart;
