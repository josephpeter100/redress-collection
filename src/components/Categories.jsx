function Categories({ active, setActive }) {
  const categories = ["All", "Dresses", "Tops", "Bags"];

  return (
    <section className="categories">
      {categories.map((cat) => (
        <button
          key={cat}
          className={active === cat ? "category active" : "category"}
          onClick={() => setActive(cat)}
        >
          {cat}
        </button>
      ))}
    </section>
  );
}

export default Categories;
