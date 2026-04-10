import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { name } = useParams();
  const [product, setProduct] = useState(null);
  const [investment, setInvestment] = useState("");
  const [electricity, setElectricity] = useState("");
  const [profit, setProfit] = useState(null);
  

// 👇 CALCULATE FUNCTION
const calculateProfit = () => {
  const earningPerDay = 500; // 🔥 dummy (baad me dynamic karenge)

  const dailyProfit = earningPerDay - Number(electricity);
  const monthlyProfit = dailyProfit * 30;

  setProfit({
    daily: dailyProfit,
    monthly: monthlyProfit,
  });
};

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(
          (item) => item.name === decodeURIComponent(name)
        );
        setProduct(found);
      });
  }, [name]);

  if (!product) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen p-6">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

        <div className="bg-[#111] p-4 rounded-lg flex justify-center items-center">
          <img
            src={`http://localhost:5000/uploads/${product.image}`}
            alt={product.name}
            className="max-h-[400px] object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">

          <h1 className="text-3xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-gray-400 mb-6">
            {product.description || "No description available"}
          </p>

          <a
            href={`https://wa.me/919988990131?text=${encodeURIComponent(
              `Hello, I want price of ${product.name}`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 px-6 py-3 rounded-lg text-center hover:bg-green-600 transition"
          >
            Contact on WhatsApp
          </a>

          <div className="bg-[#111] p-4 rounded-lg mt-6">

  <h2 className="text-xl mb-3 text-green-400">
    Profit Calculator 💰
  </h2>

  <input
    type="number"
    placeholder="Investment (₹)"
    value={investment}
    onChange={(e) => setInvestment(e.target.value)}
    className="w-full mb-2 p-2 bg-gray-800 rounded"
  />

  <input
    type="number"
    placeholder="Electricity per day (₹)"
    value={electricity}
    onChange={(e) => setElectricity(e.target.value)}
    className="w-full mb-2 p-2 bg-gray-800 rounded"
  />

  <button
    onClick={calculateProfit}
    className="bg-green-500 w-full py-2 rounded mt-2"
  >
    Calculate Profit
  </button>

  {profit && (
    <div className="mt-3 text-green-400">
      <p>Daily Profit: ₹{profit.daily}</p>
      <p>Monthly Profit: ₹{profit.monthly}</p>
    </div>
  )}

</div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;