import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Events() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    "/images/gall1.webp",
    "/images/gall2.webp",
    "/images/gall3.webp",
    "/images/gall4.webp",
    "/images/gall5.webp",
    "/images/gall6.webp",
    "/images/gall7.webp",
    "/images/gall8.webp",
  ];

  // 🔄 Handlers
  const handleNext = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // ⌨ Keyboard Controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="font-sans text-gray-800">
      {/* 🌷 HERO SECTION */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/events-bg.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-vine mb-4 drop-shadow-lg">
            Events Catered by <span className="text-pink-300">Flora-Bloom</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/90">
            Bringing beauty and elegance to every celebration — birthdays,
            weddings, and all your cherished moments.
          </p>
        </div>
      </section>

      {/* 🎉 BIRTHDAYS SECTION */}
      <section className="max-w-6xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center gap-10">
        <img
          src="/images/event-birthday.webp"
          alt="Birthday setup"
          className="w-full md:w-1/2 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500 object-cover h-[400px]"
        />
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-vine text-pink-600">
            Birthday Celebrations
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Celebrate life’s sweetest milestones with vibrant floral designs,
            playful arrangements, and the charm that only <b>Flora-Bloom</b> can
            bring. From intimate birthdays to grand surprises, we’ll make it
            bloom beautifully.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 bg-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-600 transition-all"
          >
            Book Your Event
          </Link>
        </div>
      </section>

      {/* 💍 WEDDINGS SECTION */}
      <section className="max-w-6xl mx-auto py-20 px-6 flex flex-col md:flex-row-reverse items-center gap-10 bg-pink-50 rounded-3xl shadow-inner">
        <img
          src="/images/event-wedding.webp"
          alt="Wedding setup"
          className="w-full md:w-1/2 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-500 object-cover h-[400px]"
        />
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl md:text-4xl font-vine text-rose-600">
            Dream Weddings
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Walk down the aisle surrounded by elegant floral masterpieces.
            Whether it’s a romantic garden wedding or a classic indoor setup,
            Flora-Bloom ensures your special day blossoms with love.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 bg-rose-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-rose-600 transition-all"
          >
            Plan Your Wedding
          </Link>
        </div>
      </section>

      {/* 🌸 FEATURE GALLERY */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-pink-500 to-white relative">
        <h2 className="text-4xl font-vine text-pink-100 mb-10 drop-shadow-sm">
          Featured Gallery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={img}
                alt={`Event ${i + 1}`}
                className="w-full h-56 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-sm tracking-wide">
                  View Photo
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 💡 Lightbox Modal with Keyboard Navigation */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelectedIndex(null)}
          >
            <div className="relative max-w-4xl w-[90%]">
              <img
                src={images[selectedIndex]}
                alt="Selected"
                className="rounded-3xl w-full max-h-[80vh] object-contain shadow-2xl border border-white/30"
              />
              {/* ✕ Close */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedIndex(null);
                }}
                className="absolute -top-4 -right-4 bg-white text-gray-700 hover:text-pink-600 rounded-full p-2 shadow-md transition-all"
              >
                ✕
              </button>

              {/* ⬅ Prev */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-3 shadow-md transition-all"
              >
                ‹
              </button>

              {/* ➡ Next */}
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-3 shadow-md transition-all"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 💐 INQUIRE SECTION */}
      <section className="text-center bg-gradient-to-r from-pink-400 via-fuchsia-500 to-rose-500 py-16 px-6 text-white">
        <h2 className="text-4xl font-vine mb-4 drop-shadow-md">
          Inquire With Us Today
        </h2>
        <p className="max-w-xl mx-auto mb-8 text-white/90">
          Let’s turn your dream event into reality. Our team will work closely
          with you to create floral arrangements that fit your theme,
          personality, and budget.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-medium shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
}
