import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  function checkoutWhatsApp() {
    if (cart.length === 0) return;

    const message = `
Hello, I would like to order:

${cart.map(item => `• ${item.name} - KSh ${item.price}`).join("\n")}

Total: KSh ${total}
`;

    const phoneNumber = "254745099596";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <span>{item.name}</span>
          <span>KSh {item.price}</span>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3>Total: KSh {total}</h3>

          <button className="whatsapp-btn" onClick={checkoutWhatsApp}>
            Checkout via WhatsApp
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
