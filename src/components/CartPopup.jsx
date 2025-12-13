function CartPopup({ cart, removeFromCart, closeCart }) {
  return (
    <div className="cart-popup">
      <div className="content">
        <h2>Your Cart</h2>

        {cart.length === 0 && <p>No items yet.</p>}

        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <span>{item.name} - KSh {item.price}</span>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))}

        <button className="close-btn" onClick={closeCart}>Close</button>
      </div>
    </div>
  );
}

export default CartPopup;
