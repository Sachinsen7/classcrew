

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { phenomena } from "@/app/font";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="w-full h-[67px] bg-primary text-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-full ml-14 mr-10 pt-1 mx-auto flex items-center justify-between px-6 md:px-10 h-full">
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
       
        <ul className="hidden md:flex justify-center items-center text-secondary items-center ml-16   gap-20 text-[18px] font-plus-jakarta-sans font-semibold">
          <li>
            <Link href="/class" className="hover:text-gray-300 transition-colors">
              CLASS
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              캘린더
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              STORE
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              제휴
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-gray-300 transition-colors">
              고객센터
            </Link>
          </li>
          <li> <div className=" relative flex items-center gap-2 text-[16px]">
            <div className={`w-8 h-8 absolute ml-2 ${phenomena.className}  rounded-full bg-white text-black text-[22px] flex items-center justify-center font-bold`}>
              LC
            </div>
            <span className="ml-6 pl-6 py-1 bg-gray-900 px-2 rounded-tl-sm rounded-bl-sm font-semibold text-[18px]">홍길동님</span>
          </div>
          </li>
          <li> <button className=" items-center w-8 h-8  transition">
            <img src="/msg.png" alt="" />
          </button></li>
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
          <li>
            <Link
              href="/class"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CLASS
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              캘린더
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              STORE
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              제휴
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="hover:text-gray-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              고객센터
            </Link>
          </li>

          {/* Profile */}
          <li>
            <div className="relative flex items-center gap-2 text-[16px]">
              <div
                className={`w-8 h-8 absolute ml-2 ${phenomena.className} rounded-full bg-white text-black text-[22px] flex items-center justify-center font-bold`}
              >
                LC
              </div>
              <span className="ml-6 pl-6 py-1 bg-gray-900 px-2 rounded-tl-md rounded-bl-md font-semibold text-[18px]">
                홍길동님
              </span>
            </div>
          </li>

          {/* Message Icon */}
          <li>
            <button className="w-8 h-8 transition">
              <img src="/msg.png" alt="messages" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
