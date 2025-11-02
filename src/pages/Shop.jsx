import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
import { toast } from "react-hot-toast"; // 💡 for feedback

export default function Shop() {
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(ProductContext);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart 🛒`, {
      style: {
        background: "#1e3a8a",
        color: "#fff",
        borderRadius: "12px",
      },
    });
  };

  // 🧠 Memoized cards for performance
  const productCards = useMemo(
    () =>
      products.map((product) => (
        <div
          key={product.id}
          className="group relative rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20
                     shadow-[0_8px_32px_rgba(255,182,193,0.3)] hover:shadow-[0_12px_48px_rgba(125,180,255,0.5)]
                     transition-all duration-500 hover:-translate-y-2 hover:scale-[1.04]"
        >
          {/* 🌸 Product Image */}
          <img
            src={product.image || "/fallback.jpg"}
            alt={product.name}
            onError={(e) => (e.target.src = "/fallback.jpg")}
            loading="lazy"
            className="w-full h-64 object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-110"
          />

          {/* 🌼 Product Details */}
          <div className="p-4 text-center relative z-10">
            <h3 className="text-lg font-semibold text-black/90 mb-1 drop-shadow-md">
              {product.name}
            </h3>
            <p className="text-green-600 font-medium mb-3">₱{product.price}</p>

            {/* 🛒 Add to Cart Button */}
            <button
              onClick={() => handleAddToCart(product)}
              aria-label={`Add ${product.name} to cart`}
              className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white font-medium 
                         px-4 py-2 rounded-full shadow-lg 
                         hover:shadow-[0_0_25px_rgba(96,165,250,0.7)] hover:-translate-y-1 hover:scale-105 
                         transition-all duration-300"
            >
              Add to Cart
            </button>
          </div>

          {/* ✨ Soft Glow Overlay (visual only, not blocking clicks) */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        </div>
      )),
    [products, addToCart]
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* 🌹 Section Title */}
      <h2
        id="shop-heading"
        className="text-4xl sm:text-3xl font-vine text-center mb-12 
                   bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 
                   text-transparent bg-clip-text drop-shadow-[0_0_12px_rgba(72,187,120,0.5)]"
      >
        Our Lovely Blooms
      </h2>

      {/* 🌷 Product Grid */}
      {products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {productCards}
        </div>
      ) : (
        <p className="text-center text-gray-500 italic mt-10">
          Loading beautiful blooms... 🌼
        </p>
      )}
    </section>
  );
}
