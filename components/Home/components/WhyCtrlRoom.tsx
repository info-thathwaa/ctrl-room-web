"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WhyCtrlRoom = () => {
  const features = [
    {
      icon: "/why/realtime.png",
      title: "Real-Time Visibility",
      description:
        "Track guards, sites, patrols, and incidents live as they happen, not after the shift ends.",
    },
    {
      icon: "/why/compliance.png",
      title: "Compliance Made Simple",
      description:
        "Automate attendance proof, license tracking, SOP adherence, and audit-ready records.",
    },
    {
      icon: "/why/field.png",
      title: "Built For Field Operations",
      description:
        "Designed for real-world conditions with mobile-first workflows, offline support, and verified check-ins.",
    },
    {
      icon: "/why/scales.png",
      title: "Scales Without Complexity",
      description:
        "Easily manage multiple clients, sites, events, and teams from a single unified platform.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="py-[75px] bg-white p-[24px] md:p-[98px]">
      <div className="container mx-auto">
        {/* Title Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <h2 className="text-4xl md:text-[50px] font-bold tracking-tight leading-[1.1] text-black">
            Why Ctrl-Room
          </h2>
          <p className="mt-6 text-[16px] text-zinc-600 font-medium">
            Built for real operations, not assumptions.
          </p>
        </motion.div>

        {/* Features Grid with Center Image */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left Column - 2 Features */}
          <div className="space-y-8">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-zinc-100 rounded-xl flex items-center justify-center">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={24}
                      height={24}
                      quality={100}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-600 font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center - Main Illustration */}
          <motion.div
            className="flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="relative w-full max-w-[400px] aspect-square bg-gradient-to-br from-[#03353B] to-[#024449] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/whyctrl/main-illustration.png"
                alt="Ctrl-Room Illustration"
                fill
                quality={100}
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column - 2 Features */}
          <div className="space-y-8">
            {features.slice(2, 4).map((feature, index) => (
              <motion.div
                key={index + 2}
                className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-zinc-100 rounded-xl flex items-center justify-center">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-black mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm md:text-base text-zinc-600 font-medium">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyCtrlRoom;
