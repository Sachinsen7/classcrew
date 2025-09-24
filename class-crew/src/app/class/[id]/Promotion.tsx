"use client";

import React from "react";
import Image from "next/image";

export default function PromotionNotice() {
  return (
    <main className="w-[1245px] mt-10 mb-20 space-y-16">
      {/* Promotion */}
      <section className="space-y-8">
        <h2 className="w-[250px] h-[54px] font-extrabold rounded-full text-black border-[2px] text-[26px] flex items-center justify-center">
          PROMOTION
        </h2>

        {/* 4 small images row */}
        <div className="grid grid-cols-4 gap-4 mt-10">
          {["promo1.png", "promo2.png", "promo3.png", "promo4.png"].map(
            (file, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden">
                <Image
                  src={`/class-goal/promotion/${file}`}
                  alt={`Promotion ${idx + 1}`}
                  width={295}
                  height={218}
                  className="w-full h-full object-cover"
                />
              </div>
            )
          )}
        </div>

        {/* Wide banner image */}
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/class-goal/promotion/promo5.png"
            alt="Promotion Wide"
            width={1245}
            height={218}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Notice */}
      <section className="space-y-8 mt-24">
        <h2 className="w-[160px] h-[54px] font-extrabold rounded-full text-black border-[2px] text-[26px] flex items-center justify-center">
          NOTICE
        </h2>

        <div className="rounded-lg overflow-hidden">
          <Image
            src="/class-goal/promotion/big-image.png"
            alt="Notice"
            width={1245}
            height={642}
            className="w-full object-cover"
          />
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="w-[1245px] h-[147px] bg-black rounded-xl flex items-center justify-between px-10 shadow-md">
        <div className="flex flex-col">
          <p className="text-white font-bold text-[20px]">
            나를 위한 투자, 지금 이 CLASS로 시작하세요
          </p>
          <span className="text-gray-300 text-[16px] mt-2">
            성장을 위한 꾸준한 노력, 이미 당신은 능력자
          </span>
        </div>
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow hover:bg-gray-100">
          CLASS 신청하기
        </button>
      </section>
    </main>
  );
}
