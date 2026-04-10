import React, { useState } from "react";


function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("https://vector-engineering.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    // 🔥 YAHAN ADD KARO
    console.log("LOGIN RESPONSE:", data);

    if (data.token) {
      localStorage.setItem("token", data.token);

      // 🔥 YE LINE ADD KARO (IMPORTANT)
      if (data.userId) {
        localStorage.setItem("userId", data.userId);
      }

      alert("Login Successful 🔥");
      window.location.href = "/";

    } else {
      alert(data.message);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center">
      <form onSubmit={handleLogin} className="bg-[#111] p-6 rounded w-[320px]">

        <h2 className="text-xl mb-4 text-center">Login</h2>

        <input
          name="email"
          placeholder="Email"
          className="w-full mb-3 p-2 bg-gray-800 rounded"
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full mb-3 p-2 bg-gray-800 rounded"
          onChange={handleChange}
        />

        <button className="bg-green-500 w-full py-2 rounded">
          Login
        </button>

        <p className="text-center mt-3 text-sm">
          New user?{" "}
          <span
            onClick={() => (window.location.href = "/register")}
            className="text-green-400 cursor-pointer"
          >
            Register here
          </span>
        </p>

      </form>
    </div>
  );
}

export default Login;