import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    occasion: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}, we’ll contact you soon!`);
    setForm({ name: "", email: "", number: "", occasion: "", message: "" });
  };

  return (
    <section className="relative min-h-screen h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* 🌸 Background Image */}
      <div
        className="absolute inset-0 bg-[url('/images/contact-bg.webp')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      ></div>

      {/* 🌺 Overlay for readability */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[3px]"></div>

      {/* 💐 Contact Card */}
      <div className="relative bg-white/90 backdrop-blur-lg p-8 sm:p-10 rounded-3xl shadow-2xl max-w-lg w-full border border-pink-100">
        {/* 🌹 Title */}
        <h2 className="text-4xl font-vine text-pink-600 text-center mb-6 drop-shadow-sm">
          Contact <span className="text-rose-400">Flora-Bloom</span>
        </h2>
        <p className="text-gray-600 text-center mb-8 leading-relaxed">
          We’d love to bring your floral dreams to life! Fill out the form
          below, and we’ll be in touch soon.
        </p>

        {/* 💌 Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div className="text-left">
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="text-left">
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="example@email.com"
            />
          </div>

          {/* Contact Number */}
          <div className="text-left">
            <label className="block text-gray-700 font-medium mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              value={form.number}
              onChange={(e) => setForm({ ...form, number: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
              placeholder="+63 912 345 6789"
            />
          </div>

          {/* Occasion */}
          <div className="text-left">
            <label className="block text-gray-700 font-medium mb-1">
              Occasion
            </label>
            <select
              value={form.occasion}
              onChange={(e) => setForm({ ...form, occasion: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 bg-white"
            >
              <option value="">Select Occasion</option>
              <option>Birthday</option>
              <option>Wedding</option>
              <option>Anniversary</option>
              <option>Corporate Event</option>
              <option>Other</option>
            </select>
          </div>

          {/* Message */}
          <div className="text-left">
            <label className="block text-gray-700 font-medium mb-1">
              Detailed Message
            </label>
            <textarea
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300 resize-none"
              placeholder="Tell us about your floral needs..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-2/3 mx-auto block bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500
           text-white py-2.5 px-6 text-base font-medium rounded-full
           shadow-md hover:shadow-pink-300/40 hover:scale-105
           transition-all duration-300 border border-pink-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
