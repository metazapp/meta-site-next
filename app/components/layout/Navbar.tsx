"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/career", label: "Careers" },
  ];

  return (
    <header
    className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
      isScrolled
        ? "bg-black/10 backdrop-blur-sm py-2"
        : "bg-white shadow-md py-2"
    }`}
  >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="relative z-10">
        <div className="flex items-center">
        <Image 
      src="/Metazapp-Logo.png" 
      alt="Metazapp Logo" 
      width={150}
      height={40}
      priority
      className="object-contain"
    />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 hover:text-primary ${
                    pathname === link.href
                      ? "text-primary"
                      : isScrolled
                      ? "text-gray-800"
                      : "text-black"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-white hover:bg-primary-dark transition-colors duration-300"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden relative z-10 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 flex flex-col items-end justify-center gap-1.5">
            <span
              className={`block h-0.5 rounded transition-all duration-300 ${
                isMobileMenuOpen
                  ? "w-6 -rotate-45 translate-y-1 bg-gray-800"
                  : isScrolled
                  ? "w-6 bg-gray-800"
                  : "w-6 bg-white"
              }`}
            ></span>
            <span
              className={`block h-0.5 rounded transition-all duration-300 ${
                isMobileMenuOpen
                  ? "w-6 opacity-0"
                  : isScrolled
                  ? "w-4 bg-gray-800"
                  : "w-4 bg-white"
              }`}
            ></span>
            <span
              className={`block h-0.5 rounded transition-all duration-300 ${
                isMobileMenuOpen
                  ? "w-6 rotate-45 -translate-y-1 bg-gray-800"
                  : isScrolled
                  ? "w-5 bg-gray-800"
                  : "w-5 bg-white"
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 right-0 bg-white shadow-lg py-20 px-6 z-0"
          >
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block py-2 text-gray-800 text-lg font-medium hover:text-primary transition-colors duration-300 ${
                      pathname === link.href ? "text-primary" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-4 bg-primary text-white rounded-md text-center hover:bg-primary-dark transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;