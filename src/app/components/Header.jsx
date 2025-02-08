"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 md:z-50 z-10 bg-[#22024E] text-white">
      <div className="container mx-auto flex items-center justify-between py-5 px-6">
        <div className="font-[montserratSemiBold] text-lg flex gap-2"><img src="/inspect.png" className="w-10" /> <img src="/download.png" className="w-10 h-7" /> VEHICLE VIN</div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <Link href="/" onClick={() => handleLinkClick("/")} className={`text-gray-300 ${activeSection === "/" ? "text-white" : "hover:text-white"} duration-200`}>
            HOME
          </Link>
          <Link href="/#services" onClick={() => handleLinkClick("services")} className={`text-gray-300 ${activeSection === "services" ? "text-white" : "hover:text-white"} duration-200`}>
            SERVICES
          </Link>
          <Link href="/#about" onClick={() => handleLinkClick("about")} className={`text-gray-300 ${activeSection === "about" ? "text-white" : "hover:text-white"} duration-200`}>
            ABOUT US
          </Link>
          <Link href="/#pricing" onClick={() => handleLinkClick("pricing")} className={`text-gray-300 ${activeSection === "pricing" ? "text-white" : "hover:text-white"} duration-200`}>
            PRICING
          </Link>
          <Link href="/#testimonials" onClick={() => handleLinkClick("testimonials")} className={`text-gray-300 ${activeSection === "testimonials" ? "text-white" : "hover:text-white"} duration-200`}>
            TESTIMONIALS
          </Link>
          <Link href="/#contact" onClick={() => handleLinkClick("contact")} className={`text-gray-300 ${activeSection === "contact" ? "text-white" : "hover:text-white"} duration-200`}>
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
            <Link href="/" onClick={() => handleLinkClick("/")} className={`text-gray-300 ${activeSection === "/" ? "text-white" : "hover:text-white"} duration-200`}>
              HOME
            </Link>
            <Link href="/#services" onClick={() => handleLinkClick("services")} className={`text-gray-300 ${activeSection === "services" ? "text-white" : "hover:text-white"} duration-200`}>
              SERVICES
            </Link>
            <Link href="/#about" onClick={() => handleLinkClick("about")} className={`text-gray-300 ${activeSection === "about" ? "text-white" : "hover:text-white"} duration-200`}>
              ABOUT US
            </Link>
            <Link href="/#pricing" onClick={() => handleLinkClick("pricing")} className={`text-gray-300 ${activeSection === "pricing" ? "text-white" : "hover:text-white"} duration-200`}>
              PRICING
            </Link>
            <Link href="/#testimonials" onClick={() => handleLinkClick("testimonials")} className={`text-gray-300 ${activeSection === "testimonials" ? "text-white" : "hover:text-white"} duration-200`}>
            TESTIMONIALS
          </Link>
            <Link href="/#contact" onClick={() => handleLinkClick("contact")} className={`text-gray-300 ${activeSection === "contact" ? "text-white" : "hover:text-white"} duration-200`}>
              CONTACT US
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;