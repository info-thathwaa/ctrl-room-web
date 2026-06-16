"use client";

import React from "react";
import Header from "@/components/common/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const EmployeeScheduling = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
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
            Employee Scheduling
          </h1>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="w-full px-6 md:px-16 lg:px-[100px] py-16 md:py-20 flex flex-col gap-12 md:gap-16 max-w-[1200px] mx-auto">
        {/* Section 1: Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-[20px] font-medium leading-[1.8] text-justify md:text-left text-[#3C3C3C]">
            Simplify workforce planning with our intuitive Employee Scheduling tool. Build smart, conflict-free rosters in minutes, manage shift swaps, track availability, and ensure optimal coverage—all in one dashboard. Save time, reduce no-shows, and keep your team aligned.
          </p>
        </motion.div>

        {/* Section 2: Drag-and-Drop Scheduling Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        >
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
              Drag-and-Drop Scheduling Dashboard
            </h2>
            
            <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
              <p>
                Visually plan out weekly or monthly shifts with ease. Use color-coded tiles and filters to view:
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <h3 className="text-lg font-bold text-[#03353B]">
                Highlights
              </h3>
              <ul className="list-disc pl-5 text-[#3C3C3C] text-[16px] font-normal leading-[1.8] space-y-2">
                <li>Staff availability</li>
                <li>Assigned vs. unassigned shifts</li>
                <li>Overlaps, conflicts, and open slots</li>
                <li>Leave and absence overlays</li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-end">
            <div className="relative w-full aspect-[1.45] max-w-[540px]">
              <Image
                src="/scheduling/Scheduling.svg"
                alt="Drag-and-Drop Scheduling Dashboard"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
        </motion.div>

        {/* Section 3: Smart Shift Creation & Management */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        >
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
              Smart Shift Creation & Management
            </h2>
            
            <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
              <p>
                <strong>Shift management:</strong> Shift management refers to the process of planning, organizing, and controlling employee work schedules, including shifts, rotations, and time off.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <h3 className="text-lg font-bold text-[#03353B]">
                Key Features
              </h3>
              <ol className="list-decimal pl-5 text-[#3C3C3C] text-[16px] font-normal leading-[1.8] space-y-3">
                <li>
                  <strong>Shift scheduling:</strong> Create and manage employee shifts, including start and end times, breaks, and rotations.
                </li>
                <li>
                  <strong>Time-off management:</strong> Manage employee time-off requests, including vacations, sick leave, and other absences.
                </li>
                <li>
                  <strong>Real-time updates:</strong> Provide real-time updates on shift schedules, changes, and notifications.
                </li>
              </ol>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-end">
            <div className="relative w-full aspect-[1.45] max-w-[540px]">
              {/* Background table image */}
              <Image
                src="/scheduling/Scheduling_table.svg"
                alt="Smart Shift Creation & Management Table"
                fill
                className="object-contain object-right"
              />
              {/* Overlaid mobile shift creation view */}
              <div className="absolute right-[5%] bottom-[-5%] lg:bottom-[-20%] w-[40%] h-[68%] z-10">
                <Image
                  src="/scheduling/Create_Shift.svg"
                  alt="Create New Shift Sheet"
                  fill
                  className="object-contain object-right"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section 4: Multi-Site Scheduling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col gap-5"
        >
          <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
            Multi-Site Scheduling
          </h2>
          <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <p>
              Manage different sites or client locations from a unified dashboard. Assign shifts per location while monitoring staffing levels across the board.
            </p>
            <p className="font-semibold text-[#0A0A0A] mt-2">
              Each site can have:
            </p>
            <ul className="list-disc pl-5 text-[#3C3C3C] text-[16px] font-normal leading-[1.8] space-y-2">
              <li>Unique shift structures</li>
              <li>Site-specific requirements</li>
              <li>Supervisor-specific access controls</li>
            </ul>
          </div>
        </motion.div>

        {/* Section 5: CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center gap-6 py-12 md:py-16 mt-8"
        >
          <h2 className="text-2xl md:text-[36px] font-bold text-[#0A0A0A] leading-tight max-w-[800px]">
            Smarter Scheduling Starts Here
          </h2>
          <p className="text-[16px] md:text-[18px] font-normal text-[#3C3C3C] max-w-[800px]">
            Eliminate guesswork, stop chasing last-minute replacements, and give your teams the clarity they need. With CTRL-Room's Employee Scheduling, you're in full control of your workforce planning.
          </p>
          <button className="bg-[#03353B] text-white font-bold text-sm md:text-[15px] px-8 py-4 rounded-full tracking-wider hover:bg-[#022a2e] transition active:scale-95 flex items-center gap-2">
            GET STARTED TODAY <ArrowRight />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default EmployeeScheduling;
