function ProductCard({ image, name, price, onAdd }) {
  return (
    <div className="item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">KSh {price}</p>
      <button className="add-btn" onClick={onAdd}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
