import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { X } from "lucide-react";

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, totalPrice, clearCart } =
    useContext(CartContext);

  return (
    <>
      {/* 🌸 Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* 🛒 Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[90%] sm:w-80 bg-white/20 backdrop-blur-2xl border-l border-white/30 shadow-2xl flex flex-col z-50 
        transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* ✨ Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-white/30 bg-white/10">
          <h2 className="text-2xl font-vine text-pink-600 tracking-wide drop-shadow-sm">
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 transition"
          >
            <X size={22} className="text-gray-700 hover:text-pink-600" />
          </button>
        </div>

        {/* 🌼 Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-600 text-center mt-12 italic">
              Your cart is still empty.
            </p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl p-3 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover border border-white/20"
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500">
                      ₱{item.price} × {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-red-500 hover:text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* 💳 Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-white/30 bg-white/10 p-4 space-y-3 rounded-t-2xl shadow-inner backdrop-blur-md">
            <div className="flex justify-between text-sm font-medium text-gray-700">
              <span>Total:</span>
              <span className="text-pink-700 font-semibold">
                ₱{totalPrice.toLocaleString()}
              </span>
            </div>

            <button
              onClick={() => alert("Checkout coming soon 💐")}
              className="w-full bg-gradient-to-r from-pink-400 via-fuchsia-500 to-rose-500 
                         text-white py-2.5 rounded-full shadow-md hover:shadow-lg 
                         hover:scale-105 transition-all duration-300"
            >
              Checkout
            </button>

            <button
              onClick={clearCart}
              className="w-full border border-pink-300 text-pink-700 py-2.5 rounded-full hover:bg-pink-100 transition-all duration-300"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
