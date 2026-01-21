import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, getTotal } = useContext(CartContext);
  const [note, setNote] = useState("");

  function checkoutWhatsApp() {
    const phoneNumber = "254114448895";

    let message = "Hello, I would like to order:\n\n";

    cart.forEach((item, i) => {
      message += `${i + 1}. ${item.name} x${item.qty} - KSh ${
        item.price * item.qty
      }\n`;
    });

    message += `\nTotal: KSh ${getTotal()}`;

    if (note.trim()) {
      message += `\n\nOrder Notes:\n${note}`;
    }

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
           {cart.map((item, index) => (
            <div className="cart-row" key={index}>
              <p>{item.name}</p>

              <div className="qty-controls">
                <button onClick={() => decreaseQty(index)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(index)}>+</button>
              </div>

              <span>KSh {item.price * item.qty}</span>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))} 

          <textarea
            placeholder="Add size, color, delivery location, or notes..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="order-note"
          />

          <h3>Total: KSh {getTotal()}</h3>

          <button className="whatsapp-btn" onClick={checkoutWhatsApp}>
            Checkout via WhatsApp
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
