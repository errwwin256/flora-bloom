import React, { useState, useEffect, useRef, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

export default function Home() {
  const { products } = useContext(ProductContext);
  const [currentHero, setCurrentHero] = useState(0);
  const [currentReview, setCurrentReview] = useState(0);
  const [randomProducts, setRandomProducts] = useState([]);
  const [currentRomance, setCurrentRomance] = useState(0);
  const [typedCaption, setTypedCaption] = useState("");
  const shopRef = useRef(null);

  const { addToCart } = useContext(CartContext);

  // 🌸 HERO images
  const heroImages = [
    "/flowers/1.webp",
    "/flowers/2.webp",
    "/flowers/3.webp",
    "/flowers/4.webp",
    "/flowers/5.webp",
    "/flowers/6.webp",
    "/flowers/7.webp",
    "/flowers/8.webp",
    "/flowers/9.webp",
    "/flowers/10.webp",
  ];

  // 🌼 Reviews
  const reviews = [
    {
      name: "Ella M.",
      text: "Absolutely stunning bouquets! Perfect for my wedding 🌸",
    },
    {
      name: "Rico P.",
      text: "Fast delivery, fresh flowers — I’ll order again for sure.",
    },
    {
      name: "Hannah L.",
      text: "My girlfriend cried happy tears. Thank you, Flora-Bloom!",
    },
    {
      name: "Mara D.",
      text: "The arrangements are always picture-perfect. Highly recommended!",
    },
    {
      name: "Ken L.",
      text: "They made my mom’s birthday unforgettable. Freshest blooms ever.",
    },
    {
      name: "Aira T.",
      text: "The shop’s atmosphere and service are top-tier. Will visit again 💕",
    },
    {
      name: "Lucas P.",
      text: "Flora-Bloom’s attention to detail is unmatched!",
    },
    {
      name: "Nina S.",
      text: "The scent, the design — everything felt magical ✨",
    },
    {
      name: "Josh C.",
      text: "It’s my go-to place for anniversaries and surprises 🌹",
    },
    {
      name: "Tina G.",
      text: "Perfectly crafted bouquets that melt hearts every time!",
    },
  ];

  // 🎉 Celebrate section data
  const celebrateItems = [
    {
      src: "/celebrate/birthday.webp",
      caption: "Birthday Bliss 🎂",
      text: "Make their day unforgettable with our vibrant birthday blooms.",
    },
    {
      src: "/celebrate/wedding.webp",
      caption: "Wedding Wonders 💍",
      text: "Add floral magic to your special day — elegant, timeless, and radiant.",
    },
    {
      src: "/celebrate/graduation.webp",
      caption: "Graduation Glory 🎓",
      text: "Celebrate achievements with bouquets that symbolize success.",
    },
    {
      src: "/celebrate/anniversary.webp",
      caption: "Anniversary Elegance 💖",
      text: "Mark milestones of love with flowers that speak from the heart.",
    },
  ];

  // 💞 Romance slideshow
  const romanceImages = [
    { src: "/images/romance1.webp", caption: "Timeless Love" },
    { src: "/images/romance2.webp", caption: "Moments That Bloom" },
    { src: "/images/romance3.webp", caption: "Elegant Hearts" },
    { src: "/images/romance4.webp", caption: "Cherish Every Petal" },
    { src: "/images/romance5.webp", caption: "Forever in Bloom" },
  ];

  // HERO rotation
  useEffect(() => {
    const heroInterval = setInterval(
      () => setCurrentHero((p) => (p + 1) % heroImages.length),
      5000
    );
    return () => clearInterval(heroInterval);
  }, []);

  // REVIEWS rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // RANDOM PRODUCTS (3)
  useEffect(() => {
    if (products.length > 0) {
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      setRandomProducts(shuffled.slice(0, 3));
    }
  }, [products]);

  // ROMANCE rotation
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentRomance((prev) => (prev + 1) % romanceImages.length),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  // Typewriter caption
  useEffect(() => {
    const caption = romanceImages[currentRomance].caption;
    setTypedCaption("");
    let i = 0;
    const typing = setInterval(() => {
      setTypedCaption(caption.slice(0, i + 1));
      i++;
      if (i === caption.length) clearInterval(typing);
    }, 100);
    return () => clearInterval(typing);
  }, [currentRomance]);

  const scrollToShop = () =>
    shopRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="overflow-hidden text-center">
      {/* 🌸 HERO */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentHero}
            src={heroImages[currentHero]}
            alt="Flower Hero"
            loading="lazy"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <motion.div
          className="relative z-10 max-w-2xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-vine mb-4 drop-shadow-lg">
            Love Blooms Here
          </h1>
          <p className="text-lg md:text-xl text-pink-100 mb-6">
            Where every petal whispers love, grace, and joy.
          </p>
          <button
            onClick={scrollToShop}
            className="bg-accent text-white px-8 py-3 rounded-full hover:bg-pink-500 transition-all hover:scale-105 shadow-md"
          >
            Shop Now
          </button>
        </motion.div>
      </section>

      {/* 💐 RECOMMENDED */}
      <section
        ref={shopRef}
        className="py-20 bg-gradient-to-b from-pink-50 to-white"
      >
        <h2 className="text-4xl font-vine text-primary mb-8">
          Recommended for You
        </h2>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-6">
          {randomProducts.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-lg bg-white/40 border border-white/30 shadow-lg rounded-2xl w-60 overflow-hidden transition-all"
            >
              <img
                src={p.image}
                alt={p.name}
                loading="lazy"
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800">
                  {p.name}
                </h4>
                <p className="text-green-600 font-medium mb-3">
                  ₱{p.price.toLocaleString()}
                </p>
                <button
                  onClick={() => addToCart(p)}
                  className="bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 
             text-white font-medium px-4 py-2 rounded-full text-sm 
             shadow-lg hover:shadow-[0_0_20px_rgba(125,180,255,0.6)] 
             hover:scale-105 transition-all duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🎉 CELEBRATE */}
      <section className="py-24 bg-white">
        <h2 className="text-4xl font-vine text-primary text-center mb-6">
          Celebrate with Flowers
        </h2>
        <p className="text-gray-600 text-center mb-16 text-lg">
          From birthdays to weddings, make every moment bloom beautifully.
        </p>

        <div className="flex flex-col gap-20 max-w-6xl mx-auto px-6">
          {celebrateItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="md:w-1/2 overflow-hidden rounded-3xl shadow-2xl group">
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-full max-h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-3xl font-vine text-primary mb-4">
                  {item.caption}
                </h3>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💞 ROMANCE */}
      <section className="relative py-24 bg-gradient-to-r from-pink-50 to-rose-100 flex flex-col md:flex-row items-center justify-center gap-12 px-8 overflow-hidden">
        <div className="relative w-full md:w-1/2 rounded-[2rem] shadow-2xl overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentRomance}
              src={romanceImages[currentRomance].src}
              alt={romanceImages[currentRomance].caption}
              loading="lazy"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="w-full h-[420px] md:h-[520px] object-cover rounded-[2rem]"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <motion.div
            key={`caption-${currentRomance}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-8 left-0 w-full text-center"
          >
            <p className="text-white text-lg md:text-2xl font-semibold drop-shadow-lg font-vine">
              {typedCaption}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block"
              >
                |
              </motion.span>
            </p>
          </motion.div>
        </div>

        <motion.div
          className="text-left md:w-1/3"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-vine text-primary mb-6">
            Romance Reimagined
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Surprise someone special with a bouquet that speaks louder than
            words. Our romantic arrangements are designed to capture hearts and
            let love bloom in every petal.
          </p>
        </motion.div>
      </section>

      {/* 🌼 REVIEWS */}
      <section className="relative py-28 bg-gradient-to-br from-pink-50 via-rose-100 to-pink-200 overflow-hidden">
        {/* 🌸 Soft floral background overlay */}
        <div className="absolute inset-0 bg-[url('/images/flower-bg.webp')] bg-cover bg-center opacity-10"></div>

        {/* ✨ Light overlay for readability */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

        {/* 🌹 Content */}
        <div className="relative z-10 text-center px-6">
          <h2 className="text-4xl md:text-5xl font-vine text-pink-700 mb-12 drop-shadow-sm">
            What People Say
          </h2>

          {/* 🌺 Animated Review Card */}
          <div className="relative h-[280px] flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.95 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute max-w-xl bg-white/80 backdrop-blur-md border border-pink-200 
                     shadow-[0_8px_32px_rgba(255,182,193,0.4)] rounded-3xl p-10"
              >
                <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">
                  “{reviews[currentReview].text}”
                </p>
                <h4 className="font-semibold text-pink-600 text-lg">
                  – {reviews[currentReview].name}
                </h4>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 🌷 Dots Indicator */}
          <div className="flex justify-center gap-2 mt-10">
            {reviews.map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentReview
                    ? "bg-pink-500 scale-125 shadow-[0_0_10px_rgba(244,114,182,0.6)]"
                    : "bg-pink-200"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 📍 MAP */}
      <section className="py-20 bg-white border-t">
        <h2 className="text-4xl font-vine text-primary mb-3">
          Where to Find Us
        </h2>
        <p className="text-gray-600 text-lg mb-2">
          Open Everyday — 8:00 AM to 5:00 PM
        </p>
        <p className="text-gray-500 text-base mb-8">
          Visit our store and let your heart bloom with every bouquet 🌷
        </p>
        <div className="w-full max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl">
          <iframe
            title="Flora Bloom Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798852994!2d-74.25987550733827!3d40.69767006614516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789!2sFlora%20Bloom!5e0!3m2!1sen!2sph!4v1698687250000!5m2!1sen!2sph"
            width="100%"
            height="600"
            loading="lazy"
            allowFullScreen=""
            className="border-none"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
