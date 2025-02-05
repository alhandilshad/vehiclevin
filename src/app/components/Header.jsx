"use client"
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 md:z-50 z-10 bg-[#22024E] text-white">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <div className="font-[montserratSemiBold] text-lg">VEHICLE VIN</div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <Link href="#studio" className="text-gray-300 hover:text-white duration-200">
            HOME
          </Link>
          <Link href="#services" className="text-gray-300 hover:text-white duration-200">
            SERVICES
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-white duration-200">
            ABOUT US
          </Link>
          <Link href="#services" className="text-gray-300 hover:text-white duration-200">
            PRICING
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white duration-200">
            CONTACT US
          </Link>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#22024E]">
          <nav className="flex flex-col space-y-4 text-sm font-medium py-4 px-6">
            <Link href="#studio" className="text-gray-300 hover:text-white duration-200" onClick={toggleMenu}>
              HOME
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white duration-200" onClick={toggleMenu}>
              ABOUT US
            </Link>
            <Link href="#services" className="text-gray-300 hover:text-white duration-200" onClick={toggleMenu}>
              PRICING
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white duration-200" onClick={toggleMenu}>
              CONTACT US
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;