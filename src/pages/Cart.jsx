import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart,
    getTotal,
  } = useContext(CartContext);

  function checkoutWhatsApp() {
    const phoneNumber = "254114448895";

    let message = "🛍️ *Redress Collection Order*\n\n";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} x${item.qty} = KSh ${
        item.price * item.qty
      }\n`;
    });

    message += `\n*Total: KSh ${getTotal()}*`;

    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
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
