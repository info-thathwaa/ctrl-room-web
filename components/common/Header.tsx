import React from "react";
import { ChevronRight } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  return (
    <div className="flex justify-center items-center w-full absolute  top-[30px] z-50 px-4">
      <header
        className={`bg-white flex items-center justify-between shadow-sm transition-all w-full max-w-[1042px] mx-auto ${className}`}
      >
        <div className="flex items-center px-10">
          <span className="text-[#03353B] font-bold text-2xl tracking-tight">
            CtrlRoom.
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-12">
          <a
            href="#"
            className="text-sm font-semibold text-black hover:text-[#03353B] transition-colors"
          >
            Product
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-black hover:text-[#03353B] transition-colors"
          >
            Solutions
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-black hover:text-[#03353B] transition-colors"
          >
            How it Works
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-black hover:text-[#03353B] transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="text-sm font-semibold text-black hover:text-[#03353B] transition-colors"
          >
            Contact Us
          </a>
        </nav>

        <div className="px-6">
          <button className="bg-[#03353B] text-white px-8 py-3 rounded-full flex items-center gap-2 text-sm font-bold hover:bg-[#022a2e] transition-all group">
            Login
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
