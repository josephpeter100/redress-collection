import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Shop() {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="products">
      <h2>Shop Redress Collection</h2>

      <div className="grid">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            onAdd={() => addToCart(item)}
          />
        ))}
      </div>
    </section>
  );
}

export default Shop;
