"use client";

import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { LogIn, Map, FileText, Calendar, ListTodo, IdCard } from "lucide-react";

const Reports = () => {
  const features = [
    {
      icon: <LogIn className="w-8 h-8 text-[#03353B]" />,
      label: "Check-in/Check-out Logs",
    },
    {
      icon: <Map className="w-8 h-8 text-[#03353B]" />,
      label: "Site Point Logs",
    },
    {
      icon: <FileText className="w-8 h-8 text-[#03353B]" />,
      label: "Daily Occurrence Report",
    },
    {
      icon: <Calendar className="w-8 h-8 text-[#03353B]" />,
      label: "Shifts Reports",
    },
    {
      icon: <ListTodo className="w-8 h-8 text-[#03353B]" />,
      label: "Task Report",
    },
    {
      icon: <IdCard className="w-8 h-8 text-[#03353B]" />,
      label: "Staff License Renewal Report",
    },
  ];

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
            <h1 className="text-3xl md:text-[42px] font-bold leading-tight text-[#0A0A0A]">
              Reports Module
            </h1>
          </motion.div>
        </div>

        {/* Main Content Area */}
        <div className="w-full px-6 md:px-16 lg:px-[100px] py-16 md:py-20 flex flex-col gap-10 md:gap-12 max-w-[1200px] mx-auto">
          {/* Intro Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg md:text-[20px] font-medium leading-[1.8] text-justify md:text-left text-[#3C3C3C]">
              Turn daily operations into actionable intelligence. Gain full visibility into your workforce, site activities, shift status, and daily operations—all from one place. Ctrl Room's comprehensive Reports Module transforms raw data into actionable insights, helping you manage your teams, enhance accountability, and make faster, smarter decisions.
            </p>
          </motion.div>

          {/* Why Use Ctrl Room Reports Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col gap-4"
          >
            <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
              Why Use Ctrl Room Reports?
            </h2>
            <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
              <p className="font-medium text-[#0A0A0A]">
                Real-time visibility. Smart insights. Simple presentation.
              </p>
              <p>
                Every activity in Ctrl Room—whether it's a shift update, check-in, task completion, or emergency trigger—is logged, organized, and transformed into easy-to-read reports. Whether you're reviewing a single staff member or a multi-site operation, the Reports module provides you with instant clarity and control.
              </p>
            </div>
          </motion.div>

          {/* Key Features Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col gap-8"
          >
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
                Key Features
              </h2>
              <p className="text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
                Here's what makes Ctrl Room's Reports feature an essential part of your workforce management strategy:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 mt-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col items-center gap-4 text-center">
                  <div className="flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span className="text-[16px] md:text-[18px] font-semibold text-[#03353B] leading-snug max-w-[220px]">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Check-In / Check-Out Logs Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          >
            <div className="w-full lg:w-1/2 flex flex-col gap-5">
              <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
                Check-In / Check-Out Logs
              </h2>
              
              <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
                <p className="font-semibold text-[#0A0A0A]">
                  Accurate attendance tracking, fully automated.
                </p>
                <p>
                  Keep a precise record of when and where your staff starts and ends their shifts. Eliminate manual logs and improve punctuality tracking.
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <h3 className="text-lg font-bold text-[#03353B]">
                  Highlights
                </h3>
                <ul className="list-disc pl-5 text-[#3C3C3C] text-[16px] font-normal leading-[1.8] space-y-2">
                  <li>Time-stamped logs with GPS tagging</li>
                  <li>Late check-ins and early check-outs flagged automatically</li>
                  <li>Filter by employee, date range, or site</li>
                  <li>Ideal for payroll processing and attendance reviews</li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="border border-zinc-200 rounded-2xl shadow-md bg-white overflow-hidden p-1">
                <div className="relative aspect-[16/11] w-full bg-zinc-50 rounded-xl overflow-hidden">
                  <Image
                    src="/features/attendance.png"
                    alt="Check-In / Check-Out Logs"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Site Point Logs Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          >
            <div className="w-full lg:w-1/2 flex flex-col gap-5">
              <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
                Site Point Logs
              </h2>
              
              <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
                <p className="font-semibold text-[#0A0A0A]">
                  Monitor checkpoints and patrol activity with precision.
                </p>
                <p>
                  Capture movement and activities at key control points across your site. Great for industries like security, maintenance, and logistics.
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <h3 className="text-lg font-bold text-[#03353B]">
                  Highlights
                </h3>
                <ul className="list-disc pl-5 text-[#3C3C3C] text-[16px] font-normal leading-[1.8] space-y-2">
                  <li>Logs of site point scans with time and location</li>
                  <li>Track patrol completion and missed points</li>
                  <li>Use QR, NFC, or GPS-based tracking</li>
                  <li>Export data for audits or incident reviews</li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="border border-zinc-200 rounded-2xl shadow-md bg-white overflow-hidden p-1">
                <div className="relative aspect-[16/11] w-full bg-zinc-50 rounded-xl overflow-hidden">
                  <Image
                    src="/features/site.png"
                    alt="Site Point Logs"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Daily Occurrence Report (DOR) Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          >
            <div className="w-full lg:w-1/2 flex flex-col gap-5">
              <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
                Daily Occurrence Report (DOR)
              </h2>
              
              <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
                <p className="font-semibold text-[#0A0A0A]">
                  Your daily snapshot of operations.
                </p>
                <p>
                  A comprehensive report documenting daily events, incidents, and activities within the ctrl-room. In each site guard send daily occurrence of their site through phone.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="border border-zinc-200 rounded-2xl shadow-md bg-white overflow-hidden p-1">
                <div className="relative aspect-[16/11] w-full bg-zinc-50 rounded-xl overflow-hidden">
                  <Image
                    src="/features/reports.png"
                    alt="Daily Occurrence Report"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Shifts Reports Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          >
            <div className="w-full lg:w-1/2 flex flex-col gap-5">
              <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
                Shifts Reports
              </h2>
              
              <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
                <p className="font-semibold text-[#0A0A0A]">
                  Complete shift visibility—past, present, and future.
                </p>
                <p>
                  Track shift status across your workforce and gain insights into availability, attendance, and fulfillment.
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <h3 className="text-lg font-bold text-[#03353B]">
                  Highlights
                </h3>
                <ul className="list-disc pl-5 text-[#3C3C3C] text-[16px] font-normal leading-[1.8] space-y-2">
                  <li>Assigned, accepted, rejected, and pending shifts</li>
                  <li>Staff response rates and reasons for rejection</li>
                  <li>Gaps in coverage and unaccepted shifts</li>
                  <li>Released and re-accepted shifts tracking</li>
                  <li>Perfect for: HR reviews, workforce optimization, and shift planning</li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="border border-zinc-200 rounded-2xl shadow-md bg-white overflow-hidden p-1">
                <div className="relative aspect-[16/11] w-full bg-zinc-50 rounded-xl overflow-hidden">
                  <Image
                    src="/features/Report.webp"
                    alt="Shifts Reports"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Staff License Renewal Report Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          >
            <div className="w-full lg:w-1/2 flex flex-col gap-5">
              <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
                Staff License Renewal Report
              </h2>
              
              <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
                <p className="font-semibold text-[#0A0A0A]">
                  Stay compliant, avoid disruptions.
                </p>
                <p>
                  Track upcoming license, ID, and certification expirations for your entire staff.
                </p>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <h3 className="text-lg font-bold text-[#03353B]">
                  Highlights
                </h3>
                <ul className="list-disc pl-5 text-[#3C3C3C] text-[16px] font-normal leading-[1.8] space-y-2">
                  <li>List of staff with upcoming or expired licenses</li>
                  <li>Renewal status and reminder alerts</li>
                  <li>Attach digital copies for quick reference</li>
                  <li>Helps with compliance for regulated industries</li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="border border-zinc-200 rounded-2xl shadow-md bg-white overflow-hidden p-1">
                <div className="relative aspect-[16/11] w-full bg-zinc-50 rounded-xl overflow-hidden">
                  <Image
                    src="/features/panic.png"
                    alt="Staff License Renewal Report"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile-Friendly & Smarter Decisions Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
                Mobile-Friendly Reporting
              </h2>
              <p className="text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
                View, filter, and download reports right from your mobile device. Whether you're in the office or on-site, Ctrl Room ensures you're always connected to the data that matters.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-xl md:text-[22px] font-bold text-[#03353B] leading-tight">
                Smarter Decisions Start Here
              </h2>
              <p className="text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
                Ctrl Room's Reports feature gives you the operational insight you need to optimize performance, ensure compliance, and grow with confidence.
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center gap-6 py-12 md:py-16 mt-8"
          >
            <h2 className="text-2xl md:text-[36px] font-bold text-[#0A0A0A] leading-tight max-w-[800px]">
              Transform Your Operational Data Into Actionable Insights
            </h2>
            <p className="text-[16px] md:text-[18px] font-normal text-[#3C3C3C] max-w-[650px]">
              Get complete visibility into your security operations with Ctrl Room's comprehensive reporting tools.
            </p>
            <button className="bg-[#03353B] text-white font-bold text-sm md:text-[15px] px-8 py-4 rounded-full tracking-wider hover:bg-[#022a2e] transition active:scale-95 flex items-center gap-2">
              REQUEST A DEMO TODAY &gt;
            </button>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reports;
