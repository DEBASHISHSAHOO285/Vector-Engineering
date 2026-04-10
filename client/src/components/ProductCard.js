//import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductCard({ _id, name, image }) {
  const navigate = useNavigate();

  return (
    <div className="bg-[#111] p-3 rounded-lg relative">

      {/* IMAGE */}
      <img
        src={`https://vector-engineering.onrender.com/uploads/${image}`}
        alt={name}
        className="w-full h-40 object-contain"
      />

      {/* NAME */}
      <h2
        onClick={() => navigate(`/product/${encodeURIComponent(name)}`)}  // ✅ FIX
        className="text-white mt-2 cursor-pointer hover:text-green-400"
      >
        {name}
      </h2>

      {/* WHATSAPP */}
      <a
        href={`https://wa.me/919988990131?text=${encodeURIComponent(name)}`} // ✅ FIX
        target="_blank"
        rel="noreferrer"
        className="bg-green-500 block text-center mt-2 p-2 rounded hover:bg-green-600 transition"
      >
        Enquire
      </a>

    </div>
  );
}

export default ProductCard;