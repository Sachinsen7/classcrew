"use client";

import { Instagram } from "lucide-react";
import { FaFacebookF, FaYoutube, FaLaptop } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 font-medium">
        {/* Left Section */}
        <div className=" text-md mt-4">
          <p className="text-secondary ml-2 text-[17px]">
            주식회사 러닝크루{" "}
            <span className="text-text"> | 사업자 등록번호. 393–88–01627</span>
          </p>

          <p className="text-text text-[17px]"  >
            주소, 서울 성동구 연무장5가길 7 (성수동2가, <br /> 성수역 현대테라스타워)

            W1001호–1003호
          </p>
          <p className="text-text mt-4 text-[17px]">
            이메일.{" "}
            <a
              href="mailto:info@learning-crew.com"
              className="hover:text-gray-300 transition text-text text-[17px] ml-2"
            >
              info@learning-crew.com
            </a>
          </p>
          <p className="text-[14px] text-text pt-4 mt-5 ml-3">
            © 2022. Learning Crew all rights reserved. Site by{" "}
            <a
              href="#"
              className="hover:text-gray-200 underline underline-offset-2 transition"
            >
              THREEWAY
            </a>
          </p>
        </div>

        {/* Right Section */}
        {/* Right Section */}
       <div className="bg-[#ffffff14] rounded-lg p-8 flex flex-col gap-4 shadow-lg w-full h-[210px] md:w-auto">
  {/* Buttons + Social + Dropdown */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    <button className="bg-secondary  text-black font-semibold underline rounded-lg py-5 px-4 transition hover:scale-105 border border-background">
      오시는 길
    </button>
    <button className="bg-transparent border border-background text-white font-medium rounded-lg py-5 px-4 transition hover:bg-gray-800">
      대관신청
    </button>

    {/* Social Icons */}
    <div className="flex justify-center gap-4 pt-4 border border-background py-5 px-4 rounded-lg">
      <a
        href="#"
        className="w-9 h-9 flex items-center justify-center border border-gray-600 rounded-full hover:bg-black transition transform hover:scale-110"
      >
        <FaFacebookF size={18} />
      </a>
      <a
        href="#"
        className="w-9 h-9 flex items-center justify-center border border-gray-600 rounded-full hover:bg-black transition transform hover:scale-110"
      >
        <FaYoutube size={18} />
      </a>
      <a
        href="#"
        className="w-9 h-9 flex items-center justify-center border border-gray-600 rounded-full hover:bg-black transition transform hover:scale-110"
      >
        <Instagram size={18} />
      </a>
      <a
        href="#"
        className="w-9 h-9 flex items-center justify-center border border-gray-600 rounded-full hover:bg-black transition transform hover:scale-110"
      >
        <FaLaptop size={18} />
      </a>
    </div>

    {/* Dropdown */}
    <select className="bg-transparent border border-gray-600 rounded-lg py-5 px-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-gray-500">
      <option>Family Site</option>
      <option>Learning Crew</option>
      <option>Another Site</option>
    </select>
  </div>
</div>


      </div>
    </footer>
  );
}
