import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  function checkoutWhatsApp() {
  if (cart.length === 0) return;

  let message = "Hello, I would like to order:\n\n";

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - KSh ${item.price}\n`;
  });

  message += `\nTotal: KSh ${total}`;

  const phoneNumber = "254745099596"; // real number
  const encodedMessage = encodeURIComponent(message);

  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  window.location.href = url;
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
