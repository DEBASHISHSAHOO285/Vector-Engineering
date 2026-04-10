import React, { useState, useEffect } from "react";

function Admin() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("miner");
  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  const loadProducts = () => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    if (image) formData.append("image", image);

    if (editId) {
      await fetch(`http://localhost:5000/api/products/${editId}`, {
        method: "PUT",
        body: formData,
      });
      alert("Updated ✅");
    } else {
      await fetch("http://localhost:5000/api/products", {
        method: "POST",
        body: formData,
      });
      alert("Added ✅");
    }

    setName("");
    setImage(null);
    setDescription("");
    setEditId(null);

    loadProducts();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "DELETE",
    });
    loadProducts();
  };

  const handleEdit = (item) => {
    setName(item.name);
    setDescription(item.description);
    setCategory(item.category);
    setEditId(item._id);
  };

  return (
    <div className="bg-black text-white min-h-screen p-6">

      <h1 className="text-2xl text-center mb-6">Admin Panel 🔥</h1>

      <form onSubmit={handleSubmit} className="bg-[#111] p-6 rounded w-[300px] mx-auto">

        <input
          type="text"
          placeholder="Product Name"
          className="w-full mb-3 p-2 bg-gray-800 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="file"
          className="w-full mb-3 p-2 bg-gray-800 rounded"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <textarea
          placeholder="Description"
          className="w-full mb-3 p-2 bg-gray-800 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <select
          className="w-full mb-3 p-2 bg-gray-800 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="miner">Miner</option>
          <option value="parts">Parts</option>
        </select>

        <button className="bg-green-500 w-full py-2 rounded">
          {editId ? "Update Product" : "Add Product"}
        </button>

      </form>

      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {products.map((item) => (
          <div key={item._id} className="bg-[#111] p-3 rounded">

            <img
              src={`http://localhost:5000/uploads/${item.image}`}
              alt={item.name}
              className="h-32 w-full object-contain mb-2"
            />

            <h2>{item.name}</h2>

            <button
              onClick={() => handleDelete(item._id)}
              className="bg-red-500 px-3 py-1 rounded mt-2"
            >
              Delete
            </button>

            <button
              onClick={() => handleEdit(item)}
              className="bg-blue-500 px-3 py-1 rounded mt-2 ml-2"
            >
              Edit
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Admin;