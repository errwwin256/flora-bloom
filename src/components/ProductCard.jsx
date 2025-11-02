import React from "react";

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all transform overflow-hidden flex flex-col border border-pink-100">
      {/* 🪞 Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover rounded-t-3xl transition-transform duration-500 hover:scale-110"
        />
        {/* 🌸 Soft overlay on hover */}
        <div className="absolute inset-0 bg-pink-200/0 hover:bg-pink-200/10 transition-colors duration-300"></div>
      </div>

      {/* 💐 Product Info */}
      <div className="flex-1 p-5 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-vine text-pink-700 mb-1 tracking-wide">
            {product.name}
          </h3>
          <p className="text-gray-700 font-medium text-base mb-4">
            ₱{product.price.toLocaleString()}
          </p>
        </div>

        {/* 🛒 Button */}
        <button
          onClick={() => addToCart(product)}
          className="mt-auto bg-pink-500 text-white py-2.5 rounded-full hover:bg-pink-600 transition-all shadow-md hover:shadow-lg font-medium"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
