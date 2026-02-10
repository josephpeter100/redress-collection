import { useState, useContext } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import { CartContext } from "../context/CartContext";

function Shop() {
  const { addToCart } = useContext(CartContext);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(p => p.category === activeCategory);

  return (
    <>
      <Categories active={activeCategory} setActive={setActiveCategory} />

      <section className="products">
        <div className="grid">
          {filteredProducts.map(product => (
           <ProductCard
  key={product.id}
  product={product}
  onAdd={addToCart}
/>

          ))}
        </div>
      </section>
    </>a
  );
}

export default Shop;
