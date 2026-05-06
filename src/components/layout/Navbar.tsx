"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "My Works", href: "#portfolio" },
    { name: "Blogs", href: "#blogs" },
    { name: "Specialization", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className={cn(
      "fixed left-0 right-0 z-50 transition-all duration-300 flex justify-center px-4",
      scrolled ? "top-0 px-0" : "top-6"
    )}>
      <nav
        className={cn(
          "transition-all duration-300 flex items-center justify-center py-3 px-4",
          scrolled
            ? "w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
            : "w-full max-w-5xl bg-white/90 backdrop-blur-md border border-gray-100 rounded-full shadow-lg"
        )}
      >
        <div className={cn(
          "w-full flex items-center justify-between transition-all duration-300",
          scrolled ? "max-w-7xl px-4" : "max-w-full px-4"
        )}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22H22L12 2Z" fill="#FF7D05" />
                <path d="M12 6L5 20H19L12 6Z" fill="white" fillOpacity="0.2" />
              </svg>
              <span className="font-bold text-xl tracking-tight text-primary">azmir</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-x-4 top-24 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-3xl z-40 md:hidden transition-all duration-300 ease-in-out transform shadow-2xl",
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col p-6 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
