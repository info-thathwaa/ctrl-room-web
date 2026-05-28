"use client";

import React, { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  className?: string;
  variant?: "transparent" | "solid";
  logo?: "transparent" | "solid";
}

const Header = ({
  className = "",
  variant = "solid",
  logo = "transparent",
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isTransparent = variant === "transparent";
  const isLogoTransparent = logo === "transparent";

  const navText = isLogoTransparent
    ? "text-white md:hover:text-zinc-300"
    : "text-[#03353B] md:hover:text-[#022a2e]";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      const targetId = href.substring(2);
      if (pathname === "/" || pathname === "/Home") {
        e.preventDefault();
        setMobileMenuOpen(false);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <div
      className={`flex justify-center items-center w-full z-[100] px-4 ${
        isTransparent ? "absolute top-[30px]" : "py-4 md:py-6"
      }`}
    >
      <header
        className={`flex items-center justify-between w-full px-6 md:px-16 lg:px-[100px] mx-auto relative ${
          isTransparent
            ? "bg-transparent shadow-none"
            : "bg-white shadow-sm rounded-full py-2"
        } ${className}`}
      >
        {/* LEFT : LOGO */}
        <div className={`flex items-center ${isTransparent ? "" : "px-4 md:px-8"}`}>
          <Link href="/">
            <Image
              src={`${isLogoTransparent ? "/logo.png" : "/logo2.png"}`}
              alt="Ctrl Room Logo"
              width={120}
              height={87}
              className="w-[60px] md:w-[97px]"
              priority
            />
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10 font-medium">
          <Link href="/" className={`${navText}`}>
            Home
          </Link>

          <Link 
            href="/#features" 
            className={`${navText}`}
            onClick={(e) => handleLinkClick(e, "/#features")}
          >
            Features
          </Link>

          <Link href="/about" className={`${navText}`}>
            About Us
          </Link>

          <Link 
            href="/#contact" 
            className={`${navText}`}
            onClick={(e) => handleLinkClick(e, "/#contact")}
          >
            Careers
          </Link>

          <Link 
            href="/#contact" 
            className={`${navText}`}
            onClick={(e) => handleLinkClick(e, "/#contact")}
          >
            Request For Demo
          </Link>
        </nav>

        {/* DESKTOP ACTIONS */}
        <div
          className={`hidden lg:flex items-center gap-6 ${
            isTransparent ? "" : "px-6"
          }`}
        >
          <Link
            href="/contact"
            className={`text-base font-semibold ${navText}`}
          >
            Contact Us
          </Link>

          <Link href="https://ctrl-room-frontend-version2.vercel.app/">
            <button
              className={`${
                isLogoTransparent
                  ? "bg-white text-[#03353B]"
                  : "bg-[#03353B] text-white"
              } px-8 py-3 rounded-full flex items-center gap-2 text-sm font-bold transition-all group`}
            >
              Login
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="lg:hidden flex items-center pr-4 md:pr-6">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${
              isLogoTransparent ? "text-white" : "text-[#03353B]"
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* MOBILE / TABLET MENU */}
        {mobileMenuOpen && (
          <div
            className={`absolute top-full left-0 w-full mt-4 rounded-3xl overflow-hidden lg:hidden ${
              isTransparent
                ? "bg-[#03353B]/95 backdrop-blur-md"
                : "bg-white shadow-xl"
            }`}
          >
            <nav className="flex flex-col p-6">
              <Link
                href="/"
                className={`py-3 border-b border-white/10 ${
                  isTransparent ? "text-white" : "text-[#03353B]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                href="/#features"
                className={`py-3 border-b border-white/10 ${
                  isTransparent ? "text-white" : "text-[#03353B]"
                }`}
                onClick={(e) => handleLinkClick(e, "/#features")}
              >
                Features
              </Link>

              <Link
                href="/about"
                className={`py-3 border-b border-white/10 ${
                  isTransparent ? "text-white" : "text-[#03353B]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/#contact"
                className={`py-3 border-b border-white/10 ${
                  isTransparent ? "text-white" : "text-[#03353B]"
                }`}
                onClick={(e) => handleLinkClick(e, "/#contact")}
              >
                Careers
              </Link>

              <Link
                href="/#contact"
                className={`py-3 border-b border-white/10 ${
                  isTransparent ? "text-white" : "text-[#03353B]"
                }`}
                onClick={(e) => handleLinkClick(e, "/#contact")}
              >
                Request For Demo
              </Link>

              <Link
                href="/contact"
                className={`py-3 ${
                  isTransparent ? "text-white" : "text-[#03353B]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>

              <Link
                href="https://ctrl-room-frontend-version2.vercel.app/"
                className="mt-5"
              >
                <button
                  className={`w-full ${
                    isLogoTransparent
                      ? "bg-white text-[#03353B]"
                      : "bg-[#03353B] text-white"
                  } px-6 py-3 rounded-full flex items-center justify-center gap-2 text-sm font-bold transition-all group`}
                >
                  Login
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;