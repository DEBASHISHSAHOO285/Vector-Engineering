import React from "react";
import insta from "../assets/instagram.png";
import fb from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white pt-10 pb-5 mt-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">

        {/* LOGO + ABOUT */}
        <div>
          <h1 className="text-xl font-bold text-green-400 mb-3">
            Vector Engineering
          </h1>
          <p className="text-gray-400 text-sm">
            We provide high quality mining machines and parts with best support.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h2 className="font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">

  <li
    onClick={() =>
      document.getElementById("Home")?.scrollIntoView({ behavior: "smooth" })
    }
    className="hover:text-green-400 cursor-pointer"
  >
    Home
  </li>

  <li
    onClick={() =>
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
    }
    className="hover:text-green-400 cursor-pointer"
  >
    Products
  </li>

  <li
    onClick={() =>
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
    className="hover:text-green-400 cursor-pointer"
  >
    Contact
  </li>

</ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="font-semibold mb-3">Contact</h2>
          <p className="text-gray-400 text-sm">
            📧 debashishsahoo361@gmail.com
          </p>
          <p className="text-gray-400 text-sm">
            📞 +91 9988990131
          </p>
        </div>

        {/* SOCIAL */}
        <div>
          <h2 className="font-semibold mb-3">Follow Us</h2>
          <div>
  

  <div className="flex gap-3">

    {/* Instagram */}
    <img
      src={insta}
      alt="Instagram"
      onClick={() => window.open("https://www.instagram.com/vectorengineering.in?igsh=MWw2MWowa2c2dm51ZQ==", "_blank")}
      className="w-8 h-8 p-1 bg-gray-700 rounded hover:bg-green-500 cursor-pointer"
    />

    {/* Facebook */}
    <img
      src={fb}
      alt="Facebook"
      onClick={() => window.open("https://www.facebook.com/share/14dCLs6S4nz/", "_blank")}
      className="w-8 h-8 p-1 bg-gray-700 rounded hover:bg-green-500 cursor-pointer"
    />

    {/* Twitter */}
    <img
      src={twitter}
      alt="Twitter"
      onClick={() => window.open("https://twitter.com", "_blank")}
      className="w-8 h-8 p-1 bg-gray-700 rounded hover:bg-green-500 cursor-pointer"
    />

  </div>
</div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © 2026 Vector Engineering. All rights reserved.
      </div>

    </div>
  );
}

export default Footer;