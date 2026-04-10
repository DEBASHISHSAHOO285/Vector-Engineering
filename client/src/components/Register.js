import React, { useState } from "react";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://vector-engineering.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);

      window.location.href = "/login";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center">
      <form onSubmit={handleRegister} className="bg-[#111] p-6 rounded w-[320px]">

        <h2 className="text-xl mb-4 text-center">Register</h2>

        <input name="name" placeholder="Name"
          className="w-full mb-3 p-2 bg-gray-800 rounded"
          onChange={handleChange} />

        <input name="email" placeholder="Email"
          className="w-full mb-3 p-2 bg-gray-800 rounded"
          onChange={handleChange} />

        <input name="password" type="password" placeholder="Password"
          className="w-full mb-3 p-2 bg-gray-800 rounded"
          onChange={handleChange} />

        <input name="mobile" placeholder="Mobile (optional)"
          className="w-full mb-3 p-2 bg-gray-800 rounded"
          onChange={handleChange} />

        <button className="bg-green-500 w-full py-2 rounded">
          Register
        </button>

      </form>
    </div>
  );
}

export default Register;







