"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ManagerApp = () => {
  const features = [
    {
      icon: "/managerapp/monitoring.png",
      title: "Live Site & Guard Monitoring",
      description:
        "View active sites, guards on duty, and real-time movement at a glance.",
    },
    {
      icon: "/managerapp/shift.png",
      title: "Shift & Attendance Oversight",
      description:
        "Approve shifts, correct attendance, and track ongoing work instantly.",
    },
    {
      icon: "/managerapp/requests.png",
      title: "Requests & Approvals",
      description:
        "Handle leave requests, document approvals, and shift changes on the go.",
    },
    {
      icon: "/managerapp/alerts.png",
      title: "Alerts & Escalations",
      description:
        "Receive panic alerts, incident updates, and operational notifications in real time.",
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
    hidden: { opacity: 0, x: -20 },
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
    hidden: { opacity: 0, x: 50 },
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
            MANAGER APP — Control, Anywhere
          </h2>
          <p className="mt-6 text-[16px] text-zinc-600 font-medium">
            Stay connected to sites and teams without being tied to a desk.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Features List */}
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

          {/* Right - Phone Mockup */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={phoneVariants}
          >
            <div className="relative w-full max-w-[350px] aspect-[9/16] bg-gradient-to-br from-[#03353B] to-[#024449] rounded-[40px] p-4 shadow-2xl">
              <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-white">
                <Image
                  src="/managerapp/phone-mockup.png"
                  alt="Manager App Interface"
                  fill
                  quality={100}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ManagerApp;
