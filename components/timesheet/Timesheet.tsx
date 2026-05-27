"use client";

import React from "react";
import Header from "@/components/common/Header";
import { motion } from "framer-motion";

const Timesheet = () => {
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
            Timesheet
          </h1>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="w-full px-6 md:px-16 lg:px-[100px] py-16 md:py-20 flex flex-col gap-12 md:gap-16 max-w-[1200px] mx-auto">
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-[20px] font-medium leading-[1.8] text-justify md:text-left text-[#3C3C3C]">
            Ctrl Room's Timesheet feature simplifies attendance and hour tracking for distributed, shift-based, or mobile teams. Whether your staff works onsite, in the field, or remotely—you'll always have a clear, real-time record of when they worked, where, and for how long. Track employee hours with precision, generate automated reports, and streamline payroll with confidence.
          </p>
        </motion.div>

        {/* Cards Container */}
        <div className="flex flex-col gap-8 w-full max-w-[1000px] mx-auto">
          {/* Card 1: Automated Time Logging */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col gap-4"
          >
            <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
              Automated Time Logging
            </h2>
            <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
              <p>Timesheets are automatically populated based on:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Clock-in/clock-out data</li>
                <li>Shift schedules</li>
                <li>GPS or geofence-based check-ins</li>
                <li>Manual input (if enabled with approval)</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2: Location-Linked Attendance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col gap-4"
          >
            <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
              Location-Linked Attendance
            </h2>
            <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
              <p>
                Validate time entries based on the employee's actual presence at a worksite or job location.
                Only verified check-ins are logged to prevent falsification.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Location stamps for each entry</li>
                <li>Integration with GPS & Geofencing module</li>
                <li>Supports multi-site organizations</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: Daily, Weekly, Monthly Views */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col gap-4"
          >
            <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
              Daily, Weekly, Monthly Views
            </h2>
            <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
              <p>
                Monitor total working hours, breaks, overtime, and absences across different time periods. Filter by:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Employee name or ID</li>
                <li>Site or department</li>
                <li>Date range or shift type</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 4: Recurring Shift-Based Logging */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col gap-4"
          >
            <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
              Recurring Shift-Based Logging
            </h2>
            <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
              <p>
                Seamless integration with Ctrl Room's Employee Scheduling lets the system auto-log hours for
                scheduled shifts and flag discrepancies (e.g., missed or early check-outs).
              </p>
            </div>
          </motion.div>

          {/* Card 5: Mobile-Friendly Timesheets */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col gap-4"
          >
            <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
              Mobile-Friendly Timesheets
            </h2>
            <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
              <p>Employees can:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>View their logged hours</li>
                <li>Submit corrections</li>
                <li>See pending approvals</li>
                <li>Track overtime and break time</li>
                <li>Available on both Android and iOS.</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 6: Built for Compliance & Accuracy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col gap-4"
          >
            <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
              Built for Compliance & Accuracy
            </h2>
            <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
              <p>
                Every timesheet entry is stored with metadata—location, time, source, and editor—ensuring
                compliance with labor laws, union rules, and internal HR policies. Audit logs ensure total
                transparency in all edits and approvals.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center gap-6 py-12 md:py-16 mt-8"
        >
          <h2 className="text-2xl md:text-[36px] font-bold text-[#0A0A0A] leading-tight max-w-[800px]">
            Save Time. Cut Errors. Improve Accuracy
          </h2>
          <p className="text-[16px] md:text-[18px] font-normal text-[#3C3C3C] max-w-[750px] leading-[1.6]">
            The Ctrl Room Timesheet feature gives you the confidence that your teams are paid fairly, your reports are
            clean, and your time tracking is foolproof—no more manual logs, forgotten shifts, or time theft.
          </p>
          <button className="bg-[#03353B] text-white font-bold text-sm md:text-[15px] px-8 py-4 rounded-full tracking-wider hover:bg-[#022a2e] transition active:scale-95 flex items-center gap-2">
            GET STARTED TODAY &gt;
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Timesheet;
