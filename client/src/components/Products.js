import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  

  useEffect(() => {
    fetch("https://vector-engineering.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div id="products" className="bg-black text-white py-10 px-6">

      <h1 className="text-3xl font-bold mb-6 text-center">
        Our Mining Machines
      </h1>

      {/* 🔥 CATEGORY BUTTONS */}
      <div className="flex gap-4 mb-6 justify-center flex-wrap">

  <button
    onClick={() => setSelectedCategory("all")}
    className={`px-4 py-2 rounded-full border transition ${
      selectedCategory === "all"
        ? "bg-green-500 text-white"
        : "bg-transparent text-white border-green-500 hover:bg-green-500 hover:text-white"
    }`}
  >
    All
  </button>

  <button
    onClick={() => setSelectedCategory("miner")}
    className={`px-4 py-2 rounded-full border transition ${
      selectedCategory === "miner"
        ? "bg-green-500 text-white"
        : "bg-transparent text-white border-green-500 hover:bg-green-500 hover:text-white"
    }`}
  >
    Miner
  </button>

  <button
    onClick={() => setSelectedCategory("parts")}
    className={`px-4 py-2 rounded-full border transition ${
      selectedCategory === "parts"
        ? "bg-green-500 text-white"
        : "bg-transparent text-white border-green-500 hover:bg-green-500 hover:text-white"
    }`}
  >
    Parts
  </button>

</div>

      {/* 🔥 PRODUCTS */}
      <div className="grid md:grid-cols-4 gap-6">
        {products
          .filter((item) => {
            if (selectedCategory === "all") return true;
            return item.category === selectedCategory;
          })
          .map((item) => (
            <ProductCard
              key={item._id}
              _id={item._id}
              name={item.name}
              image={item.image}
            />
          ))}
      </div>

    </div>
  );
}

export default Products;