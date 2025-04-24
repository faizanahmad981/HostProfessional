'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { loginImage } from '@/assets/images/index';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-[#FFFAF2] py-3 w-full">
      <div className="w-full flex items-center justify-between px-6 md:px-8 lg:px-15">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={loginImage} alt="Logo" className="w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-[#1E1E1E] text-sm font-medium">
          <span className="cursor-pointer hover:underline">FUNKTIONEN</span>
          <span className="cursor-pointer hover:underline">PREISE</span>
          <span className="cursor-pointer hover:underline">REVIEWS</span>
          <span className="cursor-pointer hover:underline">VERGLEICH</span>
          <span className="cursor-pointer hover:underline">FAQ</span>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:flex border border-yellow-500 text-yellow-700 rounded-full px-4 py-2 text-sm font-semibold hover:bg-yellow-100">
          Beratung Vereinbaren
        </button>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FaBars size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 p-6 pt-10 w-4/5 sm:w-1/2 max-w-sm shadow-lg transition-all">
          <div className="flex justify-between items-center mb-6">
            <Image src={loginImage} alt="Logo" className="w-auto h-6" />
            <button onClick={toggleMenu}>
              <FaTimes size={20} />
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-[#1E1E1E] font-medium text-base">
            <span className="border-b pb-1 cursor-pointer">FUNKTIONEN</span>
            <span className="border-b pb-1 cursor-pointer">PREISE</span>
            <span className="border-b pb-1 cursor-pointer">REVIEWS</span>
            <span className="border-b pb-1 cursor-pointer">VERGLEICH</span>
            <span className="border-b pb-1 cursor-pointer">FAQ</span>
          </nav>
          <button className="mt-8 w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-2 rounded-md font-semibold shadow-md">
            Beratung Vereinbaren →
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
