import ProductCard from "../components/ProductCard";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Shop() {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="products">
      <h2>Shop Redress Collection</h2>

      <div className="grid">
        <ProductCard
          image="https://i.imgur.com/eN9lueN.jpeg"
          name="Pink Silk Dress"
          price={650}
          onAdd={() => addToCart({ name: "Pink Silk Dress", price: 650 })}
        />

        <ProductCard
          image="https://i.imgur.com/3qWcLxg.jpeg"
          name="Soft White Top"
          price={300}
          onAdd={() => addToCart({ name: "Soft White Top", price: 300 })}
        />

        <ProductCard
          image="https://i.imgur.com/Yx2Jssz.jpeg"
          name="Mini Shoulder Bag"
          price={500}
          onAdd={() => addToCart({ name: "Mini Shoulder Bag", price: 500 })}
        />
      </div>
    </section>
  );
}

export default Shop;
