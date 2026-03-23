import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
  const isTransparent = variant === "transparent";
  const isLogoTransparent = logo === "transparent";

  const navText = isLogoTransparent
    ? "text-white hover:text-zinc-300 text-[#03353B] hover:text-[#022a2e]"
    : "text-[#03353B] hover:text-[#022a2e]";

  return (
    <div
      className={`flex justify-center items-center w-full z-[100] px-4 ${
        isTransparent ? "absolute top-[30px]" : "py-6"
      }`}
    >
      <header
        className={`flex items-center justify-between w-full max-w-[1200px] mx-auto ${
          isTransparent
            ? "bg-transparent shadow-none"
            : "bg-white shadow-sm rounded-full py-2"
        } ${className}`}
      >
        {/* LEFT : LOGO */}
        <div className={`flex items-center ${isTransparent ? "" : "px-8"}`}>
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

        {/* CENTER : NAV */}
        <nav className="hidden md:flex items-center gap-10 font-medium">
          <Link href="/" className={`${navText}`}>
            Home
          </Link>

          <Link href="/features" className={`${navText}`}>
            Features
          </Link>

          <Link href="/about" className={`${navText}`}>
            About Us
          </Link>

          <Link href="/careers" className={`${navText}`}>
            Careers
          </Link>

          <Link href="/demo" className={`${navText}`}>
            Request For Demo
          </Link>
        </nav>

        {/* RIGHT : ACTIONS */}
        <div
          className={`flex items-center gap-6 ${isTransparent ? "" : "px-6"}`}
        >
          <Link
            href="/contact"
            className={`text-base font-semibold ${navText}`}
          >
            Contact Us
          </Link>

          <Link href={"https://ctrl-room-frontend-version2.vercel.app/"}>
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
      </header>
    </div>
  );
};

export default Header;
