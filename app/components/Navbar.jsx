"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Overview", href: "/" },
  { name: "Our Projects", href: "#" },
  { name: "Amenities", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "Floor Plans", href: "#" },
  { name: "Download Brochure", href: "#" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black text-white shadow-md"
          : "bg-transparent text-white backdrop-blur"
      } border-b`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            className="bg-white p-2 absolute size-18 sm:size-24 top-0 sm:left-10 md:left-20 clip-polygon"
            src="/images/logo.svg"
            alt="Swarnim Logo"
            width={120}
            height={40}
          />
        </Link>

        {/* Desktop Links */}
        <nav className="hidden xl:flex justify-between w-3xl gap-6 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-yellow-600 hover:border-b transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Enquire Now Button */}
        <a
          href="#contact"
          className="hidden xl:inline-block bg-white text-black text-sm px-4 py-2 hover:bg-yellow-600 transition"
        >
          Enquire Now
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="xl:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="xl:hidden pt-10 h-screen bg-black text-white border-t shadow-sm px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-sm font-medium hover:text-yellow-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-3 w-fit bg-yellow-500 text-white text-sm px-4 py-2 rounded-full text-center hover:bg-yellow-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Enquire Now
          </a>
        </div>
      )}
    </header>
  );
}
