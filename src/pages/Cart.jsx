import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart({ cart, close, remove }) {

  const message = encodeURIComponent(
    cart.map(item => `${item.name} - KSh ${item.price}`).join("\n")
  );

  const whatsappLink = `https://wa.me/254114448895?text=${message}`;

  return (
    <div className="cart-popup">
      <div className="cart-box">
        <h3>Your Cart</h3>

        <button className="close-btn" onClick={close}>×</button>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <div className="cart-item" key={index}>
                <p>{item.name}</p>
                <span>KSh {item.price}</span>
                <button className="remove-btn" onClick={() => remove(index)}>
                  Remove
                </button>
              </div>
            ))}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              Checkout on WhatsApp
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
