import React, { useState } from "react";

function Contact() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleEmail = async () => {
  if (!name || !email || !message) {
    alert("Please fill all fields ❌");
    return;
  }

  const res = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }), // 🔥 email added
  });

  const data = await res.json();
  alert(data.message);
};

  // 📱 WHATSAPP SEND
  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/919988990131?text=${encodeURIComponent(
        `Name: ${name}\nMessage: ${message}`
      )}`
    );
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-br from-[#020617] via-[#1e293b] to-[#0f172a]" id="contact">

      <h2 className="text-4xl text-white text-center mb-10 font-bold">
        Contact Us 
      </h2>

      <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20">

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 p-3 rounded bg-gray-800 text-white outline-none"
        />
        <input
  type="email"
  placeholder="Your Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-3 mb-3 rounded bg-gray-800 text-white outline-none"
/>

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full mb-4 p-3 rounded bg-gray-800 text-white outline-none"
        />

        {/* 🔥 BUTTONS */}
        <div className="flex gap-4">

          <button
            onClick={handleEmail}
            className="flex-1 bg-blue-500 py-2 rounded hover:scale-105 transition"
          >
            Send Email 📧
          </button>

          <button
            onClick={handleWhatsApp}
            className="flex-1 bg-green-500 py-2 rounded hover:scale-105 transition"
          >
            WhatsApp 📱
          </button>

        </div>

      </div>
    </div>
  );
}

export default Contact;