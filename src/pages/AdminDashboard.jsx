import { useState } from "react";

function AdminDashboard() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function addProduct(e) {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      ...form,
      price: Number(form.price),
    };

    const updated = [...products, newProduct];
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));

    setForm({ name: "", price: "", category: "", image: "" });
  }

  function deleteProduct(id) {
    const updated = products.filter(p => p.id !== id);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  }

  return (
    <div className="admin-page">
      <h2>Admin Dashboard</h2>

      <form className="admin-form" onSubmit={addProduct}>
        <input
          name="name"
          placeholder="Product name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
        />

        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
        />

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          required
        />

        <button>Add Product</button>
      </form>

      <h3>Products</h3>

      {products.length === 0 ? (
        <p>No products yet</p>
      ) : (
        products.map(p => (
          <div key={p.id} className="admin-product">
            <img src={p.image} alt={p.name} />
            <div>
              <p>{p.name}</p>
              <span>KSh {p.price}</span>
            </div>
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default AdminDashboard;
