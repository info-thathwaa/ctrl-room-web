"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      icon: "/about/cloack.png",
      title: "Real-Time Visibility",
      description: "Live guard tracking, sites, incidents & patrols",
    },
    {
      icon: "/about/settings.png",
      title: "Operational Efficiency",
      description: "Automated shifts, attendance, payroll & reports",
    },
    {
      icon: "/about/shield.png",
      title: "Safety & Compliance",
      description: "Panic alerts, audit logs, licenses & SOP tracking",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="py-[75px] bg-white px-6 md:px-[98px]">
      <div className="container mx-auto">
        {/* Title Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={titleVariants}
        >
          <h2 className="text-4xl md:text-[50px] font-bold tracking-tight leading-[1.1] text-black">
            One Platform. Total Operational Control.
          </h2>
          <p className="mt-6 text-[16px] text-zinc-600 font-medium">
            CTRL-ROOM connects Admins, Managers, and Field Staff into one secure
            digital ecosystem—giving you real-time visibility, faster response,
            and full compliance across every site.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              {/* Icon Container */}
              <div className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] bg-[#03353B] rounded-2xl flex items-center justify-center mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={70}
                  height={70}
                  quality={100}
                  className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-black mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-zinc-600 font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
