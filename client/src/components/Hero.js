import React from "react";

function Hero() {
  return (
    <div className="bg-black text-white h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Buy Mining Machines with Best Profit 🚀
      </h1>

      <p className="text-gray-400 mb-6">
        Get high-performance mining machines with expert guidance
      </p>

      <button className="bg-green-500 px-6 py-3 rounded-lg text-lg hover:bg-green-600">
        Get Price on WhatsApp
      </button>
    </div>
  );
}

export default Hero;