function Cart({ cart, close, remove }) {

  function checkoutWhatsApp() {
    const phoneNumber = "254114448895";

    let message = "Hello, I would like to order:\n\n";

    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - KSh ${item.price}\n`;
    });

    const encodedMessage = encodeURIComponent(message);

    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
  }

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

            <button className="whatsapp-btn" onClick={checkoutWhatsApp}>
              Checkout via WhatsApp
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
