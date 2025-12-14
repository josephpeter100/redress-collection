import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  <a
  href={`https://wa.me/254745099596?text=Hello,%20I%20would%20like%20to%20order:%0A${cart
    .map(item => `${item.name} - KSh ${item.price}`)
    .join("%0A")}%0ATotal:%20KSh%20${total}`}
  target="_blank"
  rel="noreferrer"
>
  <button className="add-btn" style={{ marginTop: "15px" }}>
    Checkout via WhatsApp
  </button>
</a>

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

      {cart.length > 0 && (
        <h3 style={{ marginTop: "20px" }}>Total: KSh {total}</h3>
      )}
    </section>
  );
}

export default Cart;
