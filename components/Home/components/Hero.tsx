import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="relative w-screen h-screen overflow-hidden bg-cover bg-center px-6 md:px-[98px] py-6"
      style={{ backgroundImage: "url('/hero/hero-bg.jpg')" }}
    >
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-30 px-6 md:px-[98px] py-6">
        <div className="flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="Ctrl Room Logo"
            width={120}
            height={40}
            quality={100}
            className="w-[60px] h-auto md:max-w-[97px] md:max-h-[87px]"
            priority
          />

          <div className="flex items-center gap-2 md:gap-4">
            <button className="hidden sm:block text-white text-sm md:text-base font-medium hover:text-zinc-300 transition">
              Contact Us
            </button>
            <button className="bg-white text-[#03353B] px-4 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-base font-medium hover:bg-zinc-100 transition active:scale-95">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-center">
        <div className="relative w-full">
          {/* Character Image (Desktop) */}
          <div className="hidden md:block absolute left-0 top-1/2 -translate-y-[55%] z-10">
            <Image
              src="/hero/hero.png"
              alt="Hero Character"
              width={1920}
              height={1080}
              quality={100}
              priority
              className="h-[700px] w-auto object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="relative z-20 max-w-3xl mx-auto text-center text-white">
            <h1 className="text-2xl sm:text-3xl md:text-[50px] font-bold tracking-tight leading-[1.1]">
              Real-Time Workforce & Security Operations — One Powerful Control
              Room
            </h1>

            <p className="mt-4 md:mt-6 text-sm md:text-[16px] text-zinc-300 font-medium">
              Manage guards, sites, patrols, incidents, and compliance from a
              single real-time command center.
            </p>

            <div className="mt-6 md:mt-10">
              <button className="bg-white text-[#03353B] px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-xl shadow-black/20 hover:bg-zinc-100 transition active:scale-95">
                Request a Live Demo →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </section>
  );
};

export default Hero;
