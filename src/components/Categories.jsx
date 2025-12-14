const categories = ["All", "Dresses", "Tops", "Bags"];

function Categories({ setFilter }) {
  return (
    <section className="categories">
      {categories.map((cat) => (
        <button key={cat} onClick={() => setFilter(cat)}>
          {cat}
        </button>
      ))}
    </section>
  );
}

export default Categories;
