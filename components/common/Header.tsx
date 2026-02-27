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
              src={`${isLogoTransparent ? "/logo.png" : "/logo2.png"}`}
              alt="Ctrl Room Logo"
              width={120}
              height={87}
              quality={100}
              className={`w-[60px] h-auto md:w-[97px] md:h-[87px] `}
              priority
            />
          </Link>
        </div>

        <div className={`flex items-center gap-4 ${isTransparent ? "" : "px-6"}`}>
          <Link
            href="/contact"
            className={`text-base font-semibold transition-colors ${
              isLogoTransparent
                ? "text-white hover:text-zinc-300"
                : "text-black hover:text-[#03353B]"
            }`}
          >
            Contact Us
          </Link>
          <button
            className={`${
              isLogoTransparent
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
