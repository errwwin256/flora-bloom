import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// 🌿 Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";

// 🌼 Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Events from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans bg-gradient-to-b from-pink-50 to-white">
        {/* 🌸 Navbar */}
        <Navbar onCartOpen={() => setIsCartOpen(true)} />

        {/* 🌼 Page Content */}
        <main className="flex-1 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>

        {/* 🪴 Footer */}
        <Footer />

        {/* 🛒 Cart Drawer */}
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

        {/* 🔔 Global Toast Notifications */}
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
