"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-[24px] md:px-[98px] py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Useful Links */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">
              Useful Links
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/demo"
                  className="text-sm md:text-base text-zinc-400 hover:text-white transition"
                >
                  Request For Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Terms and Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">
              Support
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/reports"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/employee-scheduling"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Employee Scheduling
                </Link>
              </li>
              <li>
                <Link
                  href="/task-management"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Task Management
                </Link>
              </li>
              <li>
                <Link
                  href="/gps-geofencing"
                  className="text-zinc-400 hover:text-white transition"
                >
                  GPS & Geofencing
                </Link>
              </li>
              <li>
                <Link
                  href="/timesheet"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Timesheet
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">
              Solutions
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-zinc-400 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/get-in-touch"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Get In touch
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-zinc-400 hover:text-white transition"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/customer-stories"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-zinc-400 hover:text-white transition"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & App Links */}
          <div>
            <h3 className="text-base md:text-lg font-bold mb-4 md:mb-6">
              Stay Updated
            </h3>

            {/* Email Subscription */}
            <div className="mb-6">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#03353B]"
                />
                <button className="bg-[#03353B] text-white px-4 py-2 rounded-lg hover:bg-[#024449] transition">
                  →
                </button>
              </div>
              <p className="text-xs text-zinc-500 mt-2">
                No spam. Only the best travel deals.
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
              <Link href="https://apps.apple.com" target="_blank">
                <Image
                  src="/footer/appstore.png"
                  alt="Download on App Store"
                  width={120}
                  height={40}
                  quality={100}
                  className="h-8 md:h-10 w-auto bg-white rounded-[8px]"
                />
              </Link>
              <Link href="https://play.google.com" target="_blank">
                <Image
                  src="/footer/playstore.png"
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  quality={100}
                  className="h-8 md:h-10 w-auto bg-white rounded-[8px]"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div>
            <Image
              src="/logo.png"
              alt="Ctrl Room Logo"
              width={80}
              height={80}
              quality={100}
              className="w-[60px] h-auto md:max-w-[80px] md:max-h-[80px]"
            />
          </div>

          {/* Copyright */}
          <div className="text-sm text-zinc-500">
            © 2026 Ctrl Room · All Rights Reserved.
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 md:gap-4">
            <Link
              href="https://twitter.com"
              target="_blank"
              className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Link>
            <Link
              href="https://youtube.com"
              target="_blank"
              className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
