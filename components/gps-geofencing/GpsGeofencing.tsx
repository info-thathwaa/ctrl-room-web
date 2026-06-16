"use client";

import React from "react";
import Header from "@/components/common/Header";
import { motion } from "framer-motion";
import Image from "next/image";

const GpsGeofencing = () => {
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
            GPS & Geofencing
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
            CTRL-Room's GPS & Geofencing feature lets you take control of your field teams like never before. Whether you're managing security guards, maintenance staff, logistics teams, or on-site personnel-location based intelligence helps you increase accountability, optimize efficiency, and enhance safety. With real-time GPS tracking and customizable geofences, you'll know who's where, when-and why.
          </p>
        </motion.div>

        {/* Section 2: Live GPS Tracking */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        >
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
              Live GPS Tracking
            </h2>
            
            <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
              <p>
                Track your on-duty personnel in real-time. From patrol routes to delivery checkpoints, see exactly where your staff are on an interactive map.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <h3 className="text-lg font-bold text-[#03353B]">
                Highlights
              </h3>
              <ul className="list-disc pl-5 text-[#3C3C3C] text-[16px] font-normal leading-[1.8] space-y-2">
                <li>Location visibility for all clocked-in users</li>
                <li>Map-based dashboard with role-based filters</li>
                <li>Time-stamped route history and breadcrumb trails</li>
                <li>Works even in low-connectivity zones (with sync-on-return)</li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-end">
            <div className="relative w-full aspect-[1.3] max-w-[540px]">
              <Image
                src="/Gps/Map_view.svg"
                alt="Live GPS Tracking Map View"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Section 3: Geofencing for Sites & Zones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        >
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
              Geofencing for Sites & Zones
            </h2>
            
            <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
              <p>
                Set up virtual perimeters around key areas (sites, buildings, zones). Receive alerts when users enter or leave predefined boundaries.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <h3 className="text-lg font-bold text-[#03353B]">
                Use for
              </h3>
              <ul className="list-disc pl-5 text-[#3C3C3C] text-[16px] font-normal leading-[1.8] space-y-2">
                <li>Auto check-in/out at job sites</li>
                <li>Unauthorized movement alerts</li>
                <li>Time tracking based on presence</li>
                <li>Managing mobile or remote teams</li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-end">
            <div className="relative w-full aspect-[1.3] max-w-[540px]">
              <Image
                src="/Gps/Overview.svg"
                alt="Geofencing for Sites & Zones Overview"
                fill
                className="object-contain rounded-xl"
              />
            </div>
          </div>
        </motion.div>

        {/* Section 4: Automated Actions with Geofence Triggers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col gap-5"
        >
          <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
            Automated Actions with Geofence Triggers
          </h2>
          <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
            <p>
              Create powerful automation workflows that trigger specific actions when staff enter or exit defined geofence areas.
            </p>
            <p className="font-bold text-[#0A0A0A] mt-2">
              Tie geofence entry or exit to automated actions like:
            </p>
            <ul className="list-disc pl-5 text-[#3C3C3C] text-[16px] font-normal leading-[1.8] space-y-2">
              <li>Logging shift start/end</li>
              <li>Sending reminders or alerts</li>
              <li>Generating site access logs</li>
              <li>Notifying supervisors on boundary breaches</li>
            </ul>
          </div>
        </motion.div>

        {/* Section 5: Mobile Location Tracking */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
        >
          <div className="w-full lg:w-1/2 flex flex-col gap-5">
            <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
              Mobile Location Tracking
            </h2>
            
            <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
              <p>
                Staff using the CTRL-Room mobile app can securely share their live location during work hours.
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <ul className="list-disc pl-5 text-[#3C3C3C] text-[16px] font-normal leading-[1.8] space-y-2">
                <li>Toggle ON/OFF based on shift status</li>
                <li>Battery-optimized tracking</li>
                <li>GPS + Wi-Fi + Network triangulation</li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-end">
            <div className="relative w-full aspect-[1.3] max-w-[540px] lg:bottom-[-39]">
              <Image
                src="/Gps/Assigned Shifts.svg"
                alt="Mobile Location Tracking"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
        </motion.div>

        {/* Section 6: CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center gap-6 py-12 md:py-16 mt-8"
        >
          <h2 className="text-2xl md:text-[36px] font-bold text-[#0A0A0A] leading-tight max-w-[800px]">
            Boost Efficiency With Smart Location Management
          </h2>
          <p className="text-[16px] md:text-[18px] font-normal text-[#3C3C3C] max-w-[800px]">
            Get rid of paper logs, uncertainty, and lack of visibility. With CTRL-Room's GPS & Geofencing, you can simplify workforce supervision, enhance field efficiency, and ensure compliance—all from one dashboard.
          </p>
          <button className="bg-[#03353B] text-white font-bold text-sm md:text-[15px] px-8 py-4 rounded-full tracking-wider hover:bg-[#022a2e] transition active:scale-95 flex items-center gap-2">
            GET STARTED TODAY &gt;
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default GpsGeofencing;
