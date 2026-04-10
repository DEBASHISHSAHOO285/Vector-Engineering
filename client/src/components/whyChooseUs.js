import React from "react";

function WhyChoose() {
  const data = [
    { title: "High Profit", icon: "💰", desc: "Best ROI mining machines" },
    { title: "24/7 Support", icon: "📞", desc: "Always ready to help you" },
    { title: "Trusted", icon: "✅", desc: "100+ happy customers" },
    { title: "Fast Delivery", icon: "🚚", desc: "Quick shipping service" },
  ];

  return (
    <div className="py-20 px-6 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#6d28d9]">

      <h2 className="text-4xl text-white text-center mb-12 font-bold">
        Why Choose Us 
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 
            hover:scale-110 hover:shadow-[0_0_25px_#22c55e] transition duration-300 cursor-pointer text-center"
          >
            <div className="text-4xl mb-3">{item.icon}</div>

            <h3 className="text-white text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-300 text-sm">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default WhyChoose;