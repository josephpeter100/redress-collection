import { useState, useContext, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories";
import { CartContext } from "../context/CartContext";

function Shop() {
  const { addToCart } = useContext(CartContext);
  const [activeCategory, setActiveCategory] = useState("All");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(stored);
  }, []);

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter(p => p.category === activeCategory);

  return (
    <>
      <Categories active={activeCategory} setActive={setActiveCategory} />

      <section className="products">
        <div className="grid">
          {filtered.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={addToCart}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Shop;
