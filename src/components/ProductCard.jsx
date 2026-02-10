function ProductCard({ product, onAdd }) {
  return (
    <div className="item">
      <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <span>KSh {product.price}</span>

      <button className="add-btn" onClick={() => onAdd(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;