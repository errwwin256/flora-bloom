import { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";
import { CartContext } from "../context/CartContext";

export default function Navbar({ onCartOpen }) {
  const { cartCount } = useContext(CartContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = ["Home", "Shop", "Events", "About", "Contact"];

  // 🌸 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-3xl transition-all duration-500 
      border-b border-white/20 shadow-[0_8px_32px_rgba(255,182,193,0.3)]
      ${scrolled ? "bg-white/20" : "bg-white/10"}`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🌸 Logo */}
        <Link
          to="/"
          className="relative font-vine text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-[#ff99cc] via-[#ff66b2] to-[#ff3399]
          drop-shadow-[0_0_6px_rgba(255,182,193,0.9)] 
          hover:drop-shadow-[0_0_16px_rgba(255,105,180,0.9)] 
          transition-all duration-300"
        >
          Flora-Bloom
          <span className="absolute -top-2 right-0 w-2 h-2 bg-white rounded-full animate-ping opacity-80"></span>
        </Link>

        {/* 🌼 Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `relative text-lg font-medium transition-all duration-300 
                ${
                  scrolled
                    ? "text-pink-800 hover:text-pink-400"
                    : "text-pink-400 hover:text-pink-800"
                } 
                ${isActive ? "font-semibold" : ""}`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* 🌺 Right Side (Search + Cart + Menu) */}
        <div className="flex items-center gap-4">
          {/* Hide search on small screens */}
          <div className="hidden sm:block w-40 md:w-56">
            <SearchBar />
          </div>

          {/* 🛒 Cart Button */}
          <button
            onClick={onCartOpen}
            className="relative bg-gradient-to-r from-pink-400 to-rose-400 text-white p-3 rounded-full 
            hover:scale-110 hover:shadow-lg transition-transform duration-300 
            shadow-[0_4px_16px_rgba(255,182,193,0.5)]"
          >
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full shadow-md">
                {cartCount}
              </span>
            )}
          </button>

          {/* 🍔 Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden transition ${
              scrolled ? "text-white" : "text-pink-200"
            }`}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* 🌿 Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white/10 backdrop-blur-2xl border-t border-white/20 shadow-lg 
        transition-all duration-500 overflow-hidden ${
          menuOpen ? "max-h-[400px] py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 font-medium">
          {navLinks.map((item) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition-all duration-300 ${
                  scrolled
                    ? "text-white hover:text-pink-200"
                    : "text-pink-200 hover:text-white"
                } ${isActive ? "font-semibold" : ""}`
              }
            >
              {item}
            </NavLink>
          ))}

          {/* SearchBar inside mobile menu */}
          <div className="w-[80%] mt-2">
            <SearchBar />
          </div>
        </div>
      </div>
    </header>
  );
}
