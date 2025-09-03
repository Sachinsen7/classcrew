

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { phenomena } from "@/app/font";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "CLASS", href: "/class" },
    { name: "캘린더", href: "/calendar" },
    { name: "STORE", href: "/store" },
    { name: "제휴", href: "/partnership" },
    { name: "고객센터", href: "/support" },
    { name: "로그인", href: "/login" },
  ];

  return (
    <nav className="w-full h-[67px] bg-primary text-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-8 h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center group ">
          <span
            className={`text-2xl md:text-3xl font-normal tracking-widest ${phenomena.className} transition-transform duration-300 group-hover:scale-110`}
          >
            CLASS
          </span>
          <div className=" rounded-md mb-1 flex items-center justify-center shadow-md transition-transform duration-300 group-hover:rotate-90 ">
            <Image
              src="/Vector.png"
              alt="Logo"
              width={42}
              height={20}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
      <ul className={`hidden md:flex items-center gap-16 text-[18px] font-plus-jakarta-sans font-medium`}>

          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-gray-300 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-primary border-t border-white/20 transition-max-height duration-500 overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-[16px] font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
