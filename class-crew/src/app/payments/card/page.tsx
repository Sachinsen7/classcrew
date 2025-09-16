"use client";

import { div } from "framer-motion/client";
import { useState } from "react";
import { HiOutlineCreditCard } from "react-icons/hi";

export default function CardSelect() {
  const [selectedCard, setSelectedCard] = useState("");
  const [installment, setInstallment] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white  ">
      {/* Title */}
      <h2 className="text-xl font-bold mb-6">카드사선택</h2>

      {/* Card Select */}
      <div className="px-8">
          <div className="mb-4">
        <select
          value={selectedCard}
          onChange={(e) => setSelectedCard(e.target.value)}
          className="w-[436px] px-4 py-2 border rounded-md bg-gray-200 focus:outline-none"
        >
          <option value="">선택</option>
          <option value="samsung">삼성카드</option>
          <option value="lotte">롯데카드</option>
          <option value="shinhan">신한카드</option>
        </select>
      </div>

      {/* Installment Select */}
      <div className="mb-15">
        <select
          value={installment}
          onChange={(e) => setInstallment(e.target.value)}
          className="w-[436px] px-4 py-2 border rounded-md bg-gray-200 focus:outline-none"
        >
          <option value="">일시불</option>
          <option value="3">3개월</option>
          <option value="6">6개월</option>
          <option value="12">12개월</option>
        </select>
      </div>

      </div>
      

      {/* Divider */}
      <hr className="my-1" />

      {/* Payment Summary */}
      <div className="space-y-5 border-zinc-400 p-6">
        <p className="font-bold text-2xl text-black">총 결제금액</p>
        <div className="flex justify-between text-2xl text-black">
          <span>총 n개의 상품금액</span>
          <span>150,000원</span>
        </div>
        <div className="flex justify-between text-2xl text-black">
          <span>할인금액</span>
          <span>15,000원</span>
        </div>
        <div className="flex justify-between text-3xl text-black font-semibold">
          <span>총 합계</span>
          <span className="font-extrabold">135,000원</span>
        </div>
      </div>

            <hr className="my-6" />

      {/* Agreement */}
      <div className="flex items-center space-x-5 mb-9">
        <input
          type="radio"
          id="agree"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="w-7 h-7 rounded-full accent-black"
        />
        <label htmlFor="agree" className="text-2xl text-black-">
          위 구매조건 확인 및 결제진행에 동의
        </label>
      </div>

      {/* Pay Button */}
      <button
        disabled={!agreed || !selectedCard}
        className={`w-full flex items-center justify-center space-x-3 text-xl py-3 rounded-md font-medium transition-all
          ${!agreed || !selectedCard
            ? "bg-gray-200 text-black cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-black"
          }
        `}
      >
        <HiOutlineCreditCard size={34} />
        <span>결제하기</span>
      </button>
    </div>
  );
}
