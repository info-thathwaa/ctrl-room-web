import React from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  className?: string;
  variant?: "transparent" | "solid";
}

const Header = ({ className = "", variant = "solid" }: HeaderProps) => {
  const isTransparent = variant === "transparent";

  return (
    <div
      className={`flex justify-center items-center w-full z-50 px-4 ${
        isTransparent ? "absolute top-[30px]" : "py-6"
      }`}
    >
      <header
        className={`flex items-center justify-between transition-all w-full max-w-[1042px] mx-auto ${
          isTransparent
            ? "bg-transparent shadow-none"
            : "bg-white shadow-sm rounded-full py-2"
        } ${className}`}
      >
        <div className={`flex items-center ${isTransparent ? "" : "px-8"}`}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Ctrl Room Logo"
              width={120}
              height={87}
              quality={100}
              className={`w-[60px] h-auto md:w-[97px] md:h-[87px] ${
                isTransparent ? "brightness-0 invert" : ""
              }`}
              priority
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-12">
          {["Product", "Solutions", "How it Works", "Features"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-sm font-semibold transition-colors ${
                isTransparent
                  ? "text-white hover:text-zinc-300"
                  : "text-black hover:text-[#03353B]"
              }`}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`text-sm font-semibold transition-colors ${
              isTransparent
                ? "text-white hover:text-zinc-300"
                : "text-black hover:text-[#03353B]"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        <div className={isTransparent ? "" : "px-6"}>
          <button
            className={`${
              isTransparent
                ? "bg-white text-[#03353B] hover:bg-zinc-100"
                : "bg-[#03353B] text-white hover:bg-[#022a2e]"
            } px-8 py-3 rounded-full flex items-center gap-2 text-sm font-bold transition-all group`}
          >
            Login
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
