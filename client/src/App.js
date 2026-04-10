import { useState } from "react";
import Navbar from "./components/Navbar";
//import HeroSlider from "./components/HeroSlider";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import WhyChoose from "./components/whyChooseUs";
import Contact from "./components/contact";
import Footer from "./components/Footer";

import HeroSection from "./components/HeroSection";
//import Stats from "./components/Stats";
//import Features from "./components/Features";

function App() {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState(""); // ✅ add

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#6d28d9]">
      <Navbar 
        setCategory={setCategory} 
        search={search} 
        setSearch={setSearch} 
      />

      <Routes>
        <Route
  path="/"
  element={
    <>
  <HeroSection />
  <Products category={category} search={search} />
  <WhyChoose />
  <Contact />
  <Footer />
</>
  }
/>

        <Route path="/admin" element={<Admin />} />
        <Route path="/product/:name" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}



export default App;

