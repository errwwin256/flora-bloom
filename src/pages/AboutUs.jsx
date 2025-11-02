import React from "react";

export default function AboutUs() {
  return (
    <div className="font-sans text-gray-800">
      {/* 🌸 HERO SECTION */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/about-hero.webp')", // 🌸 replace with your floral header image
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-vine mb-4 drop-shadow-lg">
            Elevate Every Moment with{" "}
            <span className="text-pink-300">Flora-Bloom</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white/90">
            Where every petal is a story, and every bloom is a memory made
            timeless.
          </p>
        </div>
      </section>

      {/* 🌷 OUR STORY SECTION (with background) */}
      <section
        className="relative bg-center bg-cover py-24 px-6 text-center md:text-left flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/about-story.webp')", // 🌺 replace with your story background
        }}
      >
        {/* 🌸 Overlay for readability */}
        <div className="absolute inset-0 bg-white/85 md:bg-white/80 backdrop-blur-sm"></div>

        <div className="relative max-w-4xl mx-auto space-y-6 z-10">
          <h2 className="text-4xl font-vine text-pink-600 text-center md:text-left">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            It all started with a small dream — a love for flowers and a desire
            to share their beauty with the world. <b>Flora-Bloom</b> began in a
            humble garden, where each bloom inspired creativity, joy, and the
            promise of something more.
          </p>
          <p className="text-gray-700 leading-relaxed">
            What started as a personal passion soon blossomed into a full floral
            service. Through artistry and dedication, we’ve helped countless
            clients celebrate life’s most precious milestones — from birthdays
            and weddings to heartfelt moments of gratitude.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Today, <b>Flora-Bloom</b> continues to grow, crafting designs that
            capture emotion, beauty, and the art of blooming love.
          </p>
        </div>
      </section>

      {/* 💐 OUR MISSION SECTION (with floral background) */}
      <section
        className="relative bg-center bg-cover text-white text-center py-24 px-6"
        style={{
          backgroundImage: "url('/images/about-mission.webp')", // 🌹 replace with a floral pattern or bouquet photo
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl font-vine text-pink-200 mb-6">Our Mission</h2>
          <p className="text-white/90 leading-relaxed text-lg">
            At <b>Flora-Bloom</b>, our mission is to craft unforgettable floral
            experiences that speak directly from the heart. We believe that
            every flower tells a story — of love, joy, and connection — and we
            strive to make every arrangement reflect that beautifully.
          </p>
        </div>
      </section>
    </div>
  );
}
