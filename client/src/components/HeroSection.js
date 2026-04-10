import React from "react";
import heroImg from "../assets/herofinalImg.png";

function HeroSection() {
    const scrollToProducts = () => {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth",
  });
};
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-20">

      {/* LEFT */}
      <div className="max-w-xl ml-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          The Faster, Safer Platform To Mining Bitcoin 🚀
        </h1>

        <p className="text-gray-300 md:text-xl mb-6">
          Start mining and earn profit with advanced mining machines.
        </p>

        <button
  onClick={scrollToProducts}
  className="bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3 rounded-lg text-white"
>
  Start Mining
</button>
      </div>

      {/* RIGHT */}
      <div className="mt-10 md:mt-0 mr-6">
        <img
          src={heroImg}
          //src="https://thumbs.dreamstime.com/b/bitcoin-price-increase-graph-showing-stacks-cash-flow-coins-growing-value-374033155.jpg"
          alt="hero"
          className="w-[700px] 
  drop-shadow-[0_0_20px_rgba(255,215,0,0.6)] 
  drop-shadow-[0_0_40px_rgba(255,215,0,0.4)]
  drop-shadow-[0_0_60px_rgba(255,215,0,0.3)]"
        />
      </div>

    </div>
  );
}

export default HeroSection;