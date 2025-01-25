"use client";
import Link from "next/link";
import { useState } from "react";
import { Oswald } from "@next/font/google";
import { Menu, X } from "lucide-react";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-customBg text-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <img src="/logo.png" className="h-12" alt="Logo" />

        {/* Hamburger Menu for Mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 absolute md:relative bg-customBg w-full md:w-auto top-16 md:top-auto left-0 md:left-auto p-4 md:p-0 z-10 transform ${
            isOpen ? "flex" : "hidden md:flex"
          }`}
        >
          <li>
            <Link href="/" className="no-underline hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/menu" className="no-underline hover:text-gray-300">
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/reservation"
              className="no-underline hover:text-gray-300"
            >
              Make a Reservation
            </Link>
          </li>
          <li>
            <Link href="/contact" className="no-underline hover:text-gray-300">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
