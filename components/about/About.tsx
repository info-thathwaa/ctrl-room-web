"use client";

import React from "react";
import Header from "@/components/common/Header";
import { motion } from "framer-motion";
import {
  Shield,
  Building,
  Home,
  Users,
  Activity,
  MapPin,
  Phone,
  Mail,
  Globe,
  Award,
  Cpu,
  Map,
  Calendar,
  AlertTriangle,
  Zap,
} from "lucide-react";
import Link from "next/link";

const About = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardHoverEffect =
    "hover:shadow-lg hover:border-zinc-300 transition-all duration-300";

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
            About Us
          </h1>
        </motion.div>
      </div>

      {/* Main Content Area */}
      <div className="w-full px-6 md:px-16 lg:px-[100px] py-16 md:py-20 flex flex-col gap-16 md:gap-24 max-w-[1200px] mx-auto">
        {/* Intro / Executive Summary Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="flex flex-col md:flex-row gap-8 md:gap-12 items-center"
        >
          <div className="w-full md:w-2/3 flex flex-col gap-5">
            <span className="text-sm font-bold tracking-widest text-[#03353B] uppercase">
              Executive Summary
            </span>
            <h2 className="text-2xl md:text-[34px] font-bold text-black leading-tight">
              Securing Today. Strengthening Tomorrow.
            </h2>
            <p className="text-base md:text-[18px] font-medium leading-[1.8] text-[#3C3C3C] text-justify md:text-left">
              Effective security goes beyond simply placing guards at entry
              points; it involves vigilance, proactive risk prevention, and
              modern operational practices. Aegis Group of Companies combines
              professional manpower with intelligent technology, allowing our
              clients to benefit from both experienced personnel and real-time
              operational control. We deliver seamless, transparent, and
              accountable security services powered by the CTRL-Room platform.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="bg-[#03353B] text-white p-8 rounded-2xl shadow-md w-full max-w-[340px] flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute right-[-20px] bottom-[-20px] text-white/5 pointer-events-none">
                <Shield className="w-48 h-48" />
              </div>
              <div className="z-10">
                <span className="text-3xl font-extrabold block">2001</span>
                <span className="text-xs uppercase tracking-wider text-zinc-300">
                  Legacy Began in UK
                </span>
              </div>
              <div className="border-t border-white/20 z-10"></div>
              <div className="z-10">
                <span className="text-3xl font-extrabold block">2026</span>
                <span className="text-xs uppercase tracking-wider text-zinc-300">
                  Launched Indian Operations
                </span>
              </div>
              <div className="border-t border-white/20 z-10"></div>
              <div className="z-10">
                <span className="text-lg font-bold block">UK, UAE, INDIA</span>
                <span className="text-xs uppercase tracking-wider text-zinc-300">
                  Global Footprint
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Who We Are Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex flex-col lg:flex-row gap-8 lg:gap-12"
        >
          <div className="w-full lg:w-1/2 flex flex-col gap-5 justify-center">
            <span className="text-xs font-bold tracking-widest text-[#03353B] uppercase">
              Our Legacy
            </span>
            <h2 className="text-xl md:text-[24px] font-bold text-[#03353B] leading-tight">
              Who We Are: A Legacy of Trust
            </h2>
            <div className="flex flex-col gap-4 text-[16px] font-normal text-[#3C3C3C] leading-[1.8] text-justify md:text-left">
              <p>
                Aegis Group of companies is backed by Aegis Support Services, a
                prominent UK-based security provider founded in 2001. Building
                on decades of expertise, Archer Shield commenced Indian
                operations in 2026, with our Corporate Office located in
                Hyderabad. Today, we boast a global presence spanning the UK,
                UAE, and India.
              </p>
              <p className="font-semibold text-black italic">
                "We do not just provide manpower—we deliver discipline, reliable
                service, and peace of mind."
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-[#F8F9FA] p-6 rounded-xl flex flex-col justify-between">
              <Award className="w-8 h-8 text-[#03353B] mb-4" />
              <div>
                <h4 className="font-bold text-black text-sm md:text-base">
                  Ex-Military Leadership
                </h4>
                <p className="text-xs text-[#5C5C5C] mt-1">
                  Headed by military veterans ensuring military-grade
                  discipline.
                </p>
              </div>
            </div>
            <div className="bg-[#F8F9FA] p-6 rounded-xl flex flex-col justify-between">
              <Users className="w-8 h-8 text-[#03353B] mb-4" />
              <div>
                <h4 className="font-bold text-black text-sm md:text-base">
                  Defence Workforce
                </h4>
                <p className="text-xs text-[#5C5C5C] mt-1">
                  Premium uniform and presentation standards in the field.
                </p>
              </div>
            </div>
            <div className="bg-[#F8F9FA] p-6 rounded-xl flex flex-col justify-between">
              <Activity className="w-8 h-8 text-[#03353B] mb-4" />
              <div>
                <h4 className="font-bold text-black text-sm md:text-base">
                  3-Tier Training
                </h4>
                <p className="text-xs text-[#5C5C5C] mt-1">
                  Basic, Advanced, and Refresher programs before deployment.
                </p>
              </div>
            </div>
            <div className="bg-[#F8F9FA] p-6 rounded-xl flex flex-col justify-between">
              <Shield className="w-8 h-8 text-[#03353B] mb-4" />
              <div>
                <h4 className="font-bold text-black text-sm md:text-base">
                  Specialized Skills
                </h4>
                <p className="text-xs text-[#5C5C5C] mt-1">
                  Surveillance, emergency response, fire-fighting & access
                  control.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Comprehensive Solutions Section */}
        <div className="flex flex-col gap-8 md:gap-12 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto flex flex-col gap-4"
          >
            <span className="text-sm font-bold tracking-widest text-[#03353B] uppercase">
              Our Services
            </span>
            <h2 className="text-2xl md:text-[36px] font-bold text-[#0A0A0A] leading-tight">
              Comprehensive Security Solutions
            </h2>
            <p className="text-[16px] text-[#3C3C3C] leading-[1.6]">
              We provide tailored solutions designed to meet the unique needs of
              diverse sectors, ensuring safety, compliance, and clean
              maintenance.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1000px] mx-auto"
          >
            {/* Commercial Security */}
            <motion.div
              variants={fadeIn}
              className={`border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex gap-6 ${cardHoverEffect}`}
            >
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#03353B]/10 text-[#03353B] rounded-xl flex items-center justify-center shrink-0">
                <Building className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg md:text-[20px] font-bold text-[#03353B]">
                  Commercial Security
                </h3>
                <p className="text-[15px] font-normal text-[#3C3C3C] leading-[1.7]">
                  Protection for office buildings, IT parks, retail stores, and
                  warehouses. Includes visitor access management, surveillance
                  monitoring, and round-the-clock night patrols.
                </p>
              </div>
            </motion.div>

            {/* Residential Security */}
            <motion.div
              variants={fadeIn}
              className={`border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex gap-6 ${cardHoverEffect}`}
            >
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#03353B]/10 text-[#03353B] rounded-xl flex items-center justify-center shrink-0">
                <Home className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg md:text-[20px] font-bold text-[#03353B]">
                  Residential Security
                </h3>
                <p className="text-[15px] font-normal text-[#3C3C3C] leading-[1.7]">
                  Trained, courteous, and highly alert security personnel
                  specifically prepared for gated communities, premium apartment
                  complexes, and private villas.
                </p>
              </div>
            </motion.div>

            {/* Event Security */}
            <motion.div
              variants={fadeIn}
              className={`border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex gap-6 ${cardHoverEffect}`}
            >
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#03353B]/10 text-[#03353B] rounded-xl flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg md:text-[20px] font-bold text-[#03353B]">
                  Event Security
                </h3>
                <p className="text-[15px] font-normal text-[#3C3C3C] leading-[1.7]">
                  Efficient crowd control, VIP area protection, perimeter
                  management, and entry/exit regulation for public events,
                  corporate gatherings, and exhibitions.
                </p>
              </div>
            </motion.div>

            {/* Facilities Management */}
            <motion.div
              variants={fadeIn}
              className={`border border-[#E5E7EB] rounded-2xl bg-white p-8 md:p-10 shadow-sm flex gap-6 ${cardHoverEffect}`}
            >
              <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-[#03353B]/10 text-[#03353B] rounded-xl flex items-center justify-center shrink-0">
                <Users className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg md:text-[20px] font-bold text-[#03353B]">
                  Facilities Management
                </h3>
                <p className="text-[15px] font-normal text-[#3C3C3C] leading-[1.7]">
                  Integrated facility maintenance solutions including
                  professional housekeeping, eco-friendly pest control,
                  landscape maintenance, and technical systems support.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* The Technological Edge - CTRL Room */}
        <div className="flex flex-col gap-8 md:gap-12 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto flex flex-col gap-4"
          >
            <span className="text-sm font-bold tracking-widest text-[#03353B] uppercase">
              Smart Technology
            </span>
            <h2 className="text-2xl md:text-[36px] font-bold text-[#0A0A0A] leading-tight">
              The Technological Edge (CTRL-Room)
            </h2>
            <p className="text-[16px] text-[#3C3C3C] leading-[1.6]">
              We manage our highly trained personnel using CTRL-Room, a unified
              platform designed for real-world field conditions. This ensures
              you have total transparency over your site's security.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
          >
            {/* Live GPS Tracking */}
            <motion.div
              variants={fadeIn}
              className={`border border-[#E5E7EB] rounded-2xl bg-white p-6 md:p-8 shadow-sm flex flex-col gap-4 ${cardHoverEffect}`}
            >
              <div className="w-[50px] h-[50px] bg-[#03353B] text-white rounded-xl flex items-center justify-center">
                <Map className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#03353B]">
                Live GPS Tracking
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-[1.6]">
                Real-time visibility of guards and site activity. Track patrol
                routes, check-ins, and locations live.
              </p>
            </motion.div>

            {/* Smart Scheduling */}
            <motion.div
              variants={fadeIn}
              className={`border border-[#E5E7EB] rounded-2xl bg-white p-6 md:p-8 shadow-sm flex flex-col gap-4 ${cardHoverEffect}`}
            >
              <div className="w-[50px] h-[50px] bg-[#03353B] text-white rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#03353B]">
                Smart Scheduling
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-[1.6]">
                Efficient workforce allocation, shift management, and automated
                scheduling tailored to site requirements.
              </p>
            </motion.div>

            {/* NFC Guard Tours */}
            <motion.div
              variants={fadeIn}
              className={`border border-[#E5E7EB] rounded-2xl bg-white p-6 md:p-8 shadow-sm flex flex-col gap-4 ${cardHoverEffect}`}
            >
              <div className="w-[50px] h-[50px] bg-[#03353B] text-white rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#03353B]">
                NFC Guard Tours
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-[1.6]">
                Verified patrol completion and accountability with
                location-specific physical NFC tag taps.
              </p>
            </motion.div>

            {/* Incident Reporting */}
            <motion.div
              variants={fadeIn}
              className={`border border-[#E5E7EB] rounded-2xl bg-white p-6 md:p-8 shadow-sm flex flex-col gap-4 ${cardHoverEffect}`}
            >
              <div className="w-[50px] h-[50px] bg-[#03353B] text-white rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#03353B]">
                Incident Reporting
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-[1.6]">
                Instant issue logging, photo attachments, and automatic
                escalation alerts to manager dashboards.
              </p>
            </motion.div>

            {/* Panic Alerts */}
            <motion.div
              variants={fadeIn}
              className={`border border-[#E5E7EB] rounded-2xl bg-white p-6 md:p-8 shadow-sm flex flex-col gap-4 ${cardHoverEffect}`}
            >
              <div className="w-[50px] h-[50px] bg-[#03353B] text-white rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#03353B]">Panic Alerts</h3>
              <p className="text-sm text-[#3C3C3C] leading-[1.6]">
                One-tap emergency panic alarms with live GPS broadcast for rapid
                backup and response.
              </p>
            </motion.div>

            {/* AI-Powered Operations */}
            <motion.div
              variants={fadeIn}
              className={`border border-[#E5E7EB] rounded-2xl bg-[#03353B] text-white p-6 md:p-8 shadow-sm flex flex-col gap-4`}
            >
              <div className="w-[50px] h-[50px] bg-white text-[#03353B] rounded-xl flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">
                AI-Powered Operations
              </h3>
              <p className="text-sm text-zinc-200 leading-[1.6]">
                Smart scheduling recommendations, predictive risk alerts, and
                our AI operations assistant, <strong>ROOMIE</strong>.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Global Offices / Contact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="border border-[#E5E7EB] rounded-2xl bg-[#F8F9FA] p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-10 md:gap-12"
        >
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h3 className="text-xl md:text-[26px] font-bold text-[#03353B]">
              Let's Secure Your Future
            </h3>
            <p className="text-base text-[#3C3C3C] leading-[1.7]">
              We look forward to supporting your operations with seamless,
              high-discipline security and facility management solutions.
              Contact our teams in India or Aegis partners globally.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#03353B] shrink-0 mt-1" />
                <div className="text-[#3C3C3C] text-sm leading-[1.6]">
                  <span className="font-semibold block text-black">
                    Corporate Office (India):
                  </span>
                  2nd Floor, Plot No. B-1, Vikrampuri Colony, Hyderabad,
                  Telangana-500009
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#03353B] shrink-0" />
                <div className="text-[#3C3C3C] text-sm">
                  +91 80083 94747 / 040 31713983
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#03353B] shrink-0" />
                <div className="text-[#3C3C3C] text-sm">
                  office@archershieldsecurity.com
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Globe className="w-5 h-5 text-[#03353B] shrink-0" />
                <div className="text-sm flex gap-3 text-[#03353B] font-medium">
                  <a
                    href="https://www.archershieldsecurity.com"
                    target="_blank"
                    className="hover:underline"
                  >
                    archershieldsecurity.com
                  </a>
                  <span>|</span>
                  <a
                    href="https://www.aegisgroupofcompanies.com"
                    target="_blank"
                    className="hover:underline"
                  >
                    aegisgroupofcompanies.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <h4 className="text-lg font-bold text-black mb-3">
                Request a Proposal
              </h4>
              <p className="text-sm text-[#5C5C5C] leading-[1.6] mb-6">
                Are you looking to upgrade your on-site security with
                professional military-grade discipline and real-time CTRL-Room
                monitoring? Fill out our quick contact request form.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/contact" className="w-full">
                <button className="w-full bg-[#03353B] text-white font-bold text-sm px-6 py-4 rounded-xl hover:bg-[#022a2e] transition active:scale-95 text-center">
                  GET IN TOUCH
                </button>
              </Link>
              <Link href="/demo" className="w-full">
                <button className="w-full bg-white border-2 border-[#03353B] text-[#03353B] font-bold text-sm px-6 py-4 rounded-xl hover:bg-[#F2F3F6] transition active:scale-95 text-center">
                  REQUEST A DEMO
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
