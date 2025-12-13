import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function Shop() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="shop-page">
      <h1>Shop</h1>

      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            onAdd={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
