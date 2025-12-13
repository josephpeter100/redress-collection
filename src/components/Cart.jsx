function Cart({ cart, close, remove }) {
  return (
    <div className="cart-popup">
      <div className="cart-box">
        <h3>Your Cart</h3>

        <button className="close-btn" onClick={close}>×</button>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <p>{item.name}</p>
              <span>KSh {item.price}</span>
              <button className="remove-btn" onClick={() => remove(index)}>
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Cart;
