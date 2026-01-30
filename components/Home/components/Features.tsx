"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Features = () => {
  const tabs = [
    {
      id: "live-watch",
      title: "Live Watch & Map View",
      description: "Track guards, sites, patrol routes in real time",
      image: "/features/Overview.webp",
    },
    {
      id: "attendance",
      title: "Smart Attendance & Timesheets",
      description: "GPS, QR, NFC-based check-in/out, instant timesheets",
      image: "/features/Attendance.webp",
    },
    {
      id: "panic",
      title: "Panic & Incident Management",
      description: "Instant prevention with voice, chat & real-time location",
      image: "/features/panic.webp",
    },
    {
      id: "reports",
      title: "Reports & Analytics",
      description: "Attendance, payroll, incidents, compliance",
      image: "/features/Report.webp",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  // Auto-carousel: change tab every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [tabs.length]);

  // Image transition variants
  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const,
      },
    },
  };

  // Content transition variants for mobile
  const contentVariants = {
    enter: {
      opacity: 0,
      y: 10,
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const,
      },
    },
  };

  return (
    <div className="py-[75px] bg-[#03353B] p-[24px] md:p-[98px]">
      <div className="container mx-auto">
        {/* Title Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <h2 className="text-4xl md:text-[50px] font-bold tracking-tight leading-[1.1] text-white">
            Built For Real-World Operations
          </h2>
          <p className="mt-6 text-[16px] text-zinc-300 font-medium">
            Everything you need to run, monitor, and scale field operations — in
            real time.
          </p>
        </motion.div>

        {/* Main Content Card */}
        <div className="border rounded-3xl shadow-xl overflow-hidden">
          {/* Image Section */}
          <div className="rounded-3xl relative h-[150px] md:h-[750px] max-h-[900px] w-full bg-zinc-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000) {
                    // Swipe left - next tab
                    setActiveTab((prev) => (prev + 1) % tabs.length);
                  } else if (swipe > 10000) {
                    // Swipe right - previous tab
                    setActiveTab(
                      (prev) => (prev - 1 + tabs.length) % tabs.length,
                    );
                  }
                }}
              >
                <Image
                  src={tabs[activeTab].image}
                  alt={tabs[activeTab].title}
                  height={1080}
                  width={1920}
                  quality={100}
                  className="object-cover h-full w-full rounded-3xl pointer-events-none"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile: Active Tab Content Below Image */}
          <div className="md:hidden bg-[#03353B] px-6 py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="text-center"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {tabs[activeTab].title}
                </h3>
                <p className="text-sm text-zinc-300">
                  {tabs[activeTab].description}
                </p>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {tabs.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        activeTab === index ? "bg-white w-6" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop: Tabs Section - Bottom */}
          <div className="hidden md:block bg-[#03353B] px-6 md:px-12 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-white/20">
              {tabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`text-left p-6 transition-all duration-300 border-r border-white/20 ${
                    activeTab === index
                      ? "bg-transparent border-l-4 border-l-white"
                      : "bg-transparent border-l border-l-white/20 hover:bg-[#024449]/50"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3
                    className={`text-base md:text-lg font-bold mb-2 ${
                      activeTab === index ? "text-white" : "text-white/80"
                    }`}
                  >
                    {tab.title}
                  </h3>
                  <p
                    className={`text-sm ${
                      activeTab === index ? "text-zinc-300" : "text-zinc-400"
                    }`}
                  >
                    {tab.description}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
