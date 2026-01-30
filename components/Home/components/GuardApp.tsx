"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GuardApp = () => {
  const features = [
    {
      icon: "/guardapp/checkin.png",
      title: "Smart Check-In & Check-Out",
      description:
        "GPS, QR, and NFC-based attendance to ensure accurate and tamper-proof presence.",
    },
    {
      icon: "/guardapp/patrol.png",
      title: "Patrols & Checkpoints",
      description:
        "Guided patrol routes with live checkpoint validation and delay alerts.",
    },
    {
      icon: "/guardapp/panic.png",
      title: "Panic & Incident Reporting",
      description:
        "One-tap panic alerts with live location, photos, and instant escalation.",
    },
    {
      icon: "/guardapp/task.png",
      title: "Task & Duty Visibility",
      description:
        "Guards can clearly see assigned shifts, patrols, and responsibilities in one place.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const phoneVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
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
            GUARD APP — Built For The Field
          </h2>
          <p className="mt-6 text-[16px] text-zinc-600 font-medium">
            A simple, reliable app designed for real-world conditions.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Phone Mockup */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={phoneVariants}
          >
            <div className="relative w-full max-w-[350px] aspect-[9/16] bg-gradient-to-br from-[#03353B] to-[#024449] rounded-[40px] p-4 shadow-2xl">
              <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-white">
                <Image
                  src="/guardapp/phone-mockup.png"
                  alt="Guard App Interface"
                  fill
                  quality={100}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Features List */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                variants={itemVariants}
              >
                <div className="w-14 h-14 shrink-0 bg-[#03353B] rounded-2xl flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={28}
                    height={28}
                    quality={100}
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-zinc-600 font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GuardApp;
