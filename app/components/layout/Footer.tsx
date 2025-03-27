"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
    // Show a success message or call an API
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div>
  <div className="mb-4">
    <Image 
      src="/Metazapp-Logo.png" 
      alt="Metazapp Logo" 
      width={150}
      height={40}
      className="object-contain"
    />
  </div>
  <p className="text-gray-400 mb-4">
    Empowering Innovation with Smart & Scalable Software Solutions.
  </p>
  <div className="flex space-x-4">
    <a 
      href="https://facebook.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-300"
      aria-label="Facebook"
    >
      <FiFacebook size={20} />
    </a>
    <a 
      href="https://twitter.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-300"
      aria-label="Twitter"
    >
      <FiTwitter size={20} />
    </a>
    <a 
      href="https://instagram.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-300"
      aria-label="Instagram"
    >
      <FiInstagram size={20} />
    </a>
    <a 
      href="https://linkedin.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors duration-300"
      aria-label="LinkedIn"
    >
      <FiLinkedin size={20} />
    </a>
  </div>
</div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/services" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/career" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
            <li className="flex items-start">
             <FiMapPin className="text-primary mr-3 mt-1" size={18} />
             <div className="text-gray-400">
               <span className="block">17, First Floor,</span>
               <span className="block">Mettupalayam Road,</span>
               <span className="block">Coimbatore - 641047</span>
             </div>
             </li>
              <li className="flex items-center">
                <FiPhone className="text-primary mr-3" size={18} />
                <a 
                  href="tel:+919003414321" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  +91 90034 14321
                </a>
              </li>
              <li className="flex items-center">
                <FiMail className="text-primary mr-3" size={18} />
                <a 
                  href="mailto:hello@metazapp.com" 
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  hello@metazapp.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 h-full px-4 bg-primary text-white rounded-r hover:bg-primary-dark transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Metazapp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;