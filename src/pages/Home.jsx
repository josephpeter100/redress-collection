import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

function Home() {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Hero />
      <Categories />

      <section className="products">
        <h2>Featured Products</h2>

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
    </>
  );
}

export default Home;
