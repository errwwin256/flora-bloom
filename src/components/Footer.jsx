import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-rose-50 to-pink-100 pt-10 pb-6 border-t border-pink-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left relative z-10">
        {/* 🌸 About & Contact */}
        <div>
          <Link
            to="/"
            className="relative font-vine text-3xl font-extrabold text-transparent bg-clip-text 
            bg-gradient-to-r from-[#ff99cc] via-[#ff66b2] to-[#ff3399]
            drop-shadow-[0_0_8px_rgba(255,105,180,0.6)] 
            hover:drop-shadow-[0_0_16px_rgba(255,182,193,0.8)] 
            transition-all duration-300 inline-block mb-3"
          >
            Flora-Bloom
            <span className="absolute -top-1 right-0 w-2 h-2 bg-white rounded-full animate-ping opacity-75"></span>
          </Link>

          <p className="text-gray-700 text-sm mb-2">
            Bringing you the beauty of nature through elegant floral designs.
          </p>
          <p className="text-gray-600 text-sm">
            📍 123 Petal Avenue, Manila, Philippines
          </p>
          <p className="text-gray-600 text-sm">📞 +63 912 345 6789</p>
          <p className="text-gray-600 text-sm">✉️ florabloom@gmail.com</p>
        </div>

        {/* 🌼 Social Media */}
        <div>
          <h3 className="text-xl font-bold text-pink-600 mb-3">Follow Us</h3>
          <div className="flex justify-center sm:justify-start gap-4">
            {[
              { icon: Facebook, label: "Facebook", link: "#" },
              { icon: Instagram, label: "Instagram", link: "#" },
              { icon: Twitter, label: "Twitter", link: "#" },
              { icon: Youtube, label: "YouTube", link: "#" },
            ].map(({ icon: Icon, label, link }) => (
              <a
                key={label}
                href={link}
                className="bg-white rounded-full p-3 shadow-md hover:shadow-lg hover:bg-pink-50 hover:scale-110 transition-transform duration-300"
                aria-label={label}
              >
                <Icon className="text-pink-600" size={22} />
              </a>
            ))}
          </div>
        </div>

        {/* 💳 Payment Methods */}
        <div>
          <h3 className="text-xl font-bold text-pink-600 mb-3">
            Payment Options
          </h3>
          <div className="flex justify-center sm:justify-start gap-4">
            {[
              { src: "/images/gcash.webp", alt: "GCash" },
              { src: "/images/paymaya.webp", alt: "PayMaya" },
              { src: "/images/paypal.webp", alt: "PayPal" },
            ].map(({ src, alt }) => (
              <div
                key={alt}
                className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={src}
                  alt={alt}
                  className="w-12 h-12 object-contain rounded-full p-1"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🌺 Bottom Line */}
      <div className="mt-8 text-center text-gray-600 text-sm border-t border-pink-200 pt-4">
        <p>© {new Date().getFullYear()} Flora-Bloom. All rights reserved.</p>
        <p className="text-gray-500">Crafted with love and petals 🌷</p>
      </div>
    </footer>
  );
}
