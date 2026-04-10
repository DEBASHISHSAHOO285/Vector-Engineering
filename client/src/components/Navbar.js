import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ search, setSearch }) {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  // USER LOAD
  useEffect(() => {
    if (token) {
      fetch("http://localhost:5000/api/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch(() => setUser(null));
    }
  }, [token]);

  // PRODUCTS LOAD
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    window.location.href = "/"; // 🔥 important fix
  };

  return (
    <div className="bg-black text-white px-4 py-3 flex justify-between items-center sticky top-0 z-50">

      {/* LOGO */}
      <h1 className="text-lg font-bold text-green-500">
        Vector Engineering
      </h1>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex gap-6 items-center">

        <button
          onClick={() => {
            document.getElementById("Home")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-green-400"
        >
          Home
        </button>

        <button
          onClick={() => {
            document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-green-400"
        >
          Products
        </button>

        <button
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="hover:text-green-400"
        >
          Contact
        </button>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-1 rounded bg-gray-800 border border-green-500 outline-none"
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex gap-2">
        {token ? (
          <>
            <button onClick={() => navigate("/account")} className="bg-blue-500 px-3 py-1 rounded">
              Account
            </button>

            <button onClick={() => navigate("/admin")} className="bg-yellow-500 px-3 py-1 rounded">
              Admin
            </button>

            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/login")} className="bg-green-500 px-3 py-1 rounded">
              Login
            </button>

            <button onClick={() => navigate("/register")} className="bg-blue-500 px-3 py-1 rounded">
              Register
            </button>
          </>
        )}
      </div>

      {/* MOBILE ICONS */}
      <div className="flex items-center gap-3 md:hidden">
        <button onClick={() => setSearchOpen(!searchOpen)}>🔍</button>
        <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>

      {/* MOBILE SEARCH */}
      {searchOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#111] p-3 z-50">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 rounded bg-gray-800 border border-green-500 outline-none"
          />
        </div>
      )}

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#111] p-4 flex flex-col gap-3 z-40">

          <button
            onClick={() => {
              document.getElementById("Home")?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
            className="text-left w-full"
          >
            Home
          </button>

          <button
            onClick={() => {
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
            className="text-left w-full"
          >
            Products
          </button>

          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
            className="text-left w-full"
          >
            Contact
          </button>

          <hr className="border-gray-700" />

          {token ? (
            <>
              <button onClick={() => navigate("/account")} className="bg-blue-500 px-3 py-1 rounded">
                Account
              </button>

              <button onClick={() => navigate("/admin")} className="bg-yellow-500 px-3 py-1 rounded">
                Admin
              </button>

              <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">
                Logout
              </button>
            </>
          ) : (
            <>
              <button onClick={() => navigate("/login")} className="bg-green-500 px-3 py-1 rounded">
                Login
              </button>

              <button onClick={() => navigate("/register")} className="bg-blue-500 px-3 py-1 rounded">
                Register
              </button>
            </>
          )}
        </div>
      )}

    </div>
  );
}

export default Navbar;