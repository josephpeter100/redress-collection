import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Shop() {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="products">
      <h2>Shop</h2>

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
    </section>
  );
}

export default Shop;
