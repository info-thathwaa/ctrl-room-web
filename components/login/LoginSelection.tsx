"use client";

import React from "react";
import Header from "@/components/common/Header";
import { motion } from "framer-motion";
import { Settings, ArrowRight, ShieldUser, UserCheck, Building } from "lucide-react";

const LoginSelection = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans flex flex-col justify-between">
      <div>
        {/* Top Heading Section */}
        <div className="relative w-full h-[282px] bg-[#F2F3F6] flex flex-col justify-end items-center pb-10">
          <Header variant="transparent" logo="solid" />

          {/* Animated Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center px-4 z-20"
          >
            <h1 className="text-3xl md:text-[42px] font-bold leading-tight">
              Login Portal
            </h1>
            <p className="text-[#3C3C3C] mt-2 text-sm md:text-base max-w-lg mx-auto font-medium">
              Choose the portal you would like to access
            </p>
          </motion.div>
        </div>

        {/* Main Selection Area */}
        <div className="w-full px-6 md:px-16 lg:px-[100px] py-16 md:py-24 max-w-[1100px] mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Client Login Card */}
            <motion.a
              href="https://ctrl-room-client-dashboard-frontend.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn}
              className="group border border-[#E5E7EB] rounded-3xl bg-white p-8 md:p-12 shadow-xs flex flex-col justify-between min-h-[350px] transition-all duration-300 hover:shadow-xl hover:border-[#03353B] hover:translate-y-[-4px] cursor-pointer"
            >
              <div>
                <div className="w-[60px] h-[60px] bg-[#03353B]/10 text-[#03353B] rounded-2xl flex items-center justify-center mb-8 transition-colors group-hover:bg-[#03353B] group-hover:text-white">
                  <Building className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-black mb-4 transition-colors group-hover:text-[#03353B]">
                  Client Dashboard
                </h2>
                <p className="text-base text-[#3C3C3C] leading-relaxed mb-8">
                  Access your customized client portal to view real-time patrol tracking, guard attendance, live incident logs, and comprehensive site operations reports.
                </p>
              </div>
              <div className="flex items-center gap-3 text-[#03353B] font-bold text-base mt-4">
                <span>Launch Client Portal</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </div>
            </motion.a>

            {/* Admin Login Card */}
            <motion.a
              href="https://ctrl-room-tenant-dashboard.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeIn}
              className="group border border-[#E5E7EB] rounded-3xl bg-white p-8 md:p-12 shadow-xs flex flex-col justify-between min-h-[350px] transition-all duration-300 hover:shadow-xl hover:border-[#03353B] hover:translate-y-[-4px] cursor-pointer"
            >
              <div>
                <div className="w-[60px] h-[60px] bg-[#03353B]/10 text-[#03353B] rounded-2xl flex items-center justify-center mb-8 transition-colors group-hover:bg-[#03353B] group-hover:text-white">
                  <ShieldUser className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-black mb-4 transition-colors group-hover:text-[#03353B]">
                  Tenant Admin Dashboard
                </h2>
                <p className="text-base text-[#3C3C3C] leading-relaxed mb-8">
                  Manage tenant settings, configure system-wide rules, monitor guard schedules, oversee global patrol points, and generate administrative analytics.
                </p>
              </div>
              <div className="flex items-center gap-3 text-[#03353B] font-bold text-base mt-4">
                <span>Launch Admin Portal</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LoginSelection;
