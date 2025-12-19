function ProductCard({ image, name, price, onAdd }) {
  return (
    <div className="item">
      <img src={image} alt={name} />
      <p>{name}</p>
      <span>KSh {price}</span>

      <button className="add-btn" onClick={onAdd}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
